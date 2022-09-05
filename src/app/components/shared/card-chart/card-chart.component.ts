import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataSet} from "../../../_models/DataSet";
import Chart from "chart.js/auto";

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss'],
})
export class CardChartComponent implements OnInit, AfterViewInit {

  @Input() public chartColor = '';
  @Input() public titleStat = '';
  @Input() public subtitleText = '';
  @Input() public column = false;
  @Input() public yData: number[] = [];
  @Input() public xData: number[] = [];
  @Input() public yReverse = false;
  @Input() public yMin = 1;
  @Input() public yMax = 20;

  @ViewChild('barChartLastRace', { static: true }) barChart;

  bars: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.createLineChart();
  }

  getDataSets(): DataSet {
    console.log(this.yData);
    return {
      data: this.yData,
      label: 'pos',
      fill: false,
      backgroundColor: this.chartColor,
      borderColor: this.chartColor,
      hidden: false
    };
  }

  createLineChart() {
    console.log(this.xData);
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.xData,
        datasets: [this.getDataSets()],
      },
      options: {
        layout: {
          padding: {
            top: 5,
            right: 5
          }
        },
        aspectRatio: 1,
        elements: {
          line: {
            cubicInterpolationMode: 'monotone'
          },
          point: {
            radius: 0
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          y: {
            grid: {
              display: false,
              borderWidth: 0
            },
            min: this.yMin,
            max: this.yMax,
            reverse: this.yReverse,
            ticks: {
              display: false
            }
          },
          x: {
            grid: {
              display: false,
              borderWidth: 0
            },
            ticks: {
              display: false
            }
          }
        }
      }
    });
  }

}
