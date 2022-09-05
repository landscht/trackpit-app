import {Component, OnInit} from '@angular/core';
import {DriverService} from '../../_services/driver.service';
import {ActivatedRoute} from '@angular/router';
import {Driver} from '../../_models/Driver';
import {Result} from '../../_models/Result';
import {DriverStanding} from '../../_models/DriverStanding';
import {ModalController} from '@ionic/angular';
import {
  WorldChampionshipDetailsComponent
} from '../../components/modals/world-championship-details/world-championship-details.component';
import {Season} from '../../_models/Season';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  public driver: Driver;
  public defaultSeasonSelected!: Season;

  constructor(private driverService: DriverService,
              private route: ActivatedRoute,
              private modalController: ModalController) { }

  get getLastResult(): Result {
    return this.driver.lastTenRaces[this.driver.lastTenRaces.length-1];
  }

  get getLastDriverStanding(): DriverStanding {
    return this.driver.lastTenDriverStandings[this.driver.lastTenDriverStandings.length-1];
  }

  get getXData(): number[] {
    return [...new Set(this.driver.lastTenRaces.map(result => result.resultId))];
  }

  get getXDataDriverStandings(): number[] {
    return [...new Set(this.driver.lastTenDriverStandings.map(driverStanding => driverStanding.driverStandingsId))];
  }

  get getYData(): number[] {
    return Array.from(this.driver.lastTenRaces, result => result.positionOrder);
  }

  get getYDataDriverStandingsPoint(): number[] {
    return Array.from(this.driver.lastTenDriverStandings, driverStanding => driverStanding.points);
  }

  get getYDataDriverStandingsPos(): number[] {
    return Array.from(this.driver.lastTenDriverStandings, driverStanding => driverStanding.position);
  }

  get getConstructorColor(): string {
    return this.driver && this.driver.driverConstructor && this.driver.driverConstructor && this.driver.driverConstructor.pictures ? this.driver.driverConstructor.pictures.color : '#333333';
  }

  ngOnInit() {
    this.getDriver();
    this.defaultSeasonSelected = Object.assign(new Season(), {
      year: Number(this.route.snapshot.paramMap.get('season')),
      url: ''
    });
  }

  onChangeSeason(season: Season) {
    this.getDriver(season.year);
  }

  getDriver(season?: number): void {
    const driverId = Number(this.route.snapshot.paramMap.get('driverId'));
    this.driverService.getDriverById(driverId, season).subscribe({
      next: (driver: Driver) => {
        this.driver = driver;
      }
    });
  }

  async openModalWorldChampionship(driver: Driver) {
    const modal = await this.modalController.create({
      component: WorldChampionshipDetailsComponent,
      initialBreakpoint: 1,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        driver
      }
    });
    return await modal.present();
  }

}
