import {Component, OnDestroy, OnInit} from '@angular/core';
import {Race} from '../../_models/Race';
import {RaceService} from '../../_services/race.service';
import {DriverStanding} from '../../_models/DriverStanding';
import {DriverStandingService} from '../../_services/driverStanding.service';
import {ConstructorStanding} from '../../_models/ConstructorStanding';
import {ConstructorStandingService} from '../../_services/constructorStanding.service';
import {Result} from '../../_models/Result';
import {ResultService} from '../../_services/result.service';
import {ModalController} from "@ionic/angular";
import {TeamPreviewComponent} from "../../components/modals/team-preview/team-preview.component";
import {Constructor} from "../../_models/Constructor";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public nextRace!: Race;
  public lastRace!: Race;
  public topFiveDrivers: DriverStanding[] = [];
  public topFiveConstructors: ConstructorStanding[] = [];

  constructor(private raceService: RaceService,
              private driverStandingsService: DriverStandingService,
              private constructorStandingService: ConstructorStandingService,
              private resultService: ResultService,
              private modalController: ModalController) {}

  ngOnInit() {
    this.getNextRace();
    this.getTopFiveDrivers();
    this.getTopFiveConstructors();
    this.getLastRace();
  }

  getNextRace(): void {
    this.raceService.getNextRace().subscribe({
      next: (race: Race) => {
        this.nextRace = race;
      }
    });
  }

  getLastRace(): void {
    this.raceService.getLastRace().subscribe({
      next: (race: Race) => {
        this.lastRace = race;
      }
    });
  }

  getTopFiveDrivers(): void {
    this.driverStandingsService.getTopFiveOfCurrentSeason().subscribe({
      next: (topFive: DriverStanding[]) => {
        this.topFiveDrivers = topFive;
      }
    });
  }

  async openModalTeamPreview(team: Constructor) {
    const modal = await this.modalController.create({
      component: TeamPreviewComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        team
      }
    });
    return await modal.present();
  }

  getTopFiveConstructors(): void {
    this.constructorStandingService.getTopFiveOfCurrentSeason().subscribe({
      next: (topFive: ConstructorStanding[]) => {
        this.topFiveConstructors = topFive;
      }
    });
  }
}
