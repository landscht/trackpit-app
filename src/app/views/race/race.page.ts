import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Race} from '../../_models/Race';
import {RaceService} from '../../_services/race.service';
import {ActivatedRoute} from '@angular/router';
import {Result} from '../../_models/Result';
import Chart, {ActiveElement, ChartEvent} from 'chart.js/auto';
import {LapTime} from '../../_models/LapTime';
import {DataSet} from '../../_models/DataSet';
import {Driver} from '../../_models/Driver';
import {ConstructorPicture} from '../../_models/ConstructorPicture';
import {Qualifying} from '../../_models/Qualifying';
import {PitStop} from '../../_models/PitStop';

const header = (tooltipItems) => {
  let lap = 0;

  tooltipItems.forEach((tooltipItem) => {
    lap = tooltipItem.parsed.x + 1;
  });
  return 'Lap ' + lap;
};

@Component({
  selector: 'app-race',
  templateUrl: './race.page.html',
  styleUrls: ['./race.page.scss'],
})
export class RacePage implements OnInit {

  @ViewChild('barChart') barChart: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChartPitStop') barChartPitStop: ElementRef<HTMLCanvasElement>;
  bars: any;
  barsPitStop: any;
  segmentResults = '';

  public race: Race;

  constructor(private raceService: RaceService,
              private route: ActivatedRoute) { }

  get getFastestPitStop(): PitStop {
    return this.race.pitStops.reduce((prev, current) => (prev.milliseconds < current.milliseconds) ? prev : current);
  }

  get getSlowestPitStop(): PitStop {
    return this.race.pitStops.reduce((prev, current) => (prev.milliseconds > current.milliseconds) ? prev : current);
  }

  get getMaxPitStop(): number {
    return Math.max(...this.race.pitStops.map(pit => pit.stop));
  }

  ngOnInit() {
    this.getRace();
  }

  ionViewDidEnter() {
    if (this.race && this.race.results.length > 1) {
      this.createLineChart();
      this.createLineChartPitStop();
    }
  }

  filterQualifying(): Qualifying[] {
    return this.race.qualifying.filter(qualifying => {
      switch (this.segmentResults) {
        case 'q3':
          return qualifying.q3;
        case 'q2':
          return qualifying.q2;
        case 'q1':
          return qualifying.q1;
        default:
          return [];
      }
    }).sort((a, b) => {
      const aValue = this.segmentResults === 'q3' ? a.q3 : this.segmentResults === 'q2' ? a.q2 : a.q1;
      const bValue = this.segmentResults === 'q3' ? b.q3 : this.segmentResults === 'q2' ? b.q2 : b.q1;
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });
  }

  createLineChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: [...new Set(this.race.lapTimes.map(lapTime => lapTime.lap))],
        datasets: this.getDataSets(),
      },
      options: {
        interaction: {
          intersect: false,
          mode: 'index'
        },
        aspectRatio: 0.5,
        elements: {
          point: {
            radius: 0
          },
          line: {
            borderWidth: 1,
          }
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true
            }
          },
          tooltip: {
            callbacks: {
              title: header
            }
          }
        },
        parsing: {
          xAxisKey: 'lap',
          yAxisKey: 'position',
          key: 'driver.code'
        },
        scales: {
          y: {
            grid: {
              display: false
            },
            min: 1,
            max: 20,
            reverse: true,
            ticks: {
              stepSize: 1
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  createLineChartPitStop() {
    this.barsPitStop = new Chart(this.barChartPitStop.nativeElement, {
      type: 'line',
      data: {
        labels: [...new Set(this.race.lapTimes.map(lapTime => lapTime.lap))],
        datasets: this.getDataSetsPitStop(),
      },
      options: {
        interaction: {
          intersect: false,
        },
        aspectRatio: 0.8,
        elements: {
          line: {
            borderWidth: 0,
          }
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true
            }
          }
        },
        parsing: {
          xAxisKey: 'lap',
          yAxisKey: 'stop',
          key: 'driver.code'
        },
        scales: {
          y: {
            grid: {
              display: false
            },
            min: 1,
            max: this.getMaxPitStop,
            ticks: {
              stepSize: 1
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }

  getDataSets(): DataSet[] {
    const codes: string[] = [...new Set(this.race.lapTimes.map(lapTime => lapTime.driver.code))];
    const datasets: DataSet[] = [];
    codes.forEach((code, index) => {
      datasets.push({
        data: this.race.lapTimes.filter(lapTime => lapTime.driver.code === code),
        label: code,
        fill: false,
        backgroundColor: this.getColor(code),
        borderColor: this.getColor(code),
        hidden: index !== 0
      });
    });
    return datasets;
  }

  getDataSetsPitStop(): DataSet[] {
    const codes: string[] = [...new Set(this.race.lapTimes.map(lapTime => lapTime.driver.code))];
    const datasets: DataSet[] = [];
    codes.forEach((code, index) => {
      datasets.push({
        data: this.race.pitStops.filter(lapTime => lapTime.driver.code === code),
        label: code,
        fill: false,
        backgroundColor: this.getColor(code),
        borderColor: this.getColor(code),
        hidden: index !== 0
      });
    });
    return datasets;
  }

  getColor(code: string): string {
    const pictures: ConstructorPicture = this.race.results.find(result => result.driver.code === code).constructorModel.pictures;
    return pictures ? pictures.color : '';
  }

  getRace(): void {
    const raceId = Number(this.route.snapshot.paramMap.get('raceId'));
    this.raceService.getRaceById(raceId).subscribe({
      next: (race: Race) => {
        console.log(race);
        this.race = race;
        this.segmentResults = race.results.length > 1 ? 'race' : 'q3';
      }
    });
  }

}
