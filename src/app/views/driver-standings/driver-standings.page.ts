import { Component, OnInit } from '@angular/core';
import {DriverStanding} from "../../_models/DriverStanding";
import {DriverStandingService} from "../../_services/driverStanding.service";
import {Router} from "@angular/router";
import {SeasonSelectedData} from "../../_data/SeasonSelectedData";
import {Season} from "../../_models/Season";
import {SeasonService} from "../../_services/season.service";

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.page.html',
  styleUrls: ['./driver-standings.page.scss'],
})
export class DriverStandingsPage implements OnInit {

  public driverStandings: DriverStanding[] = [];
  public seasonSelected: Season;
  public loading = false;

  constructor(private driverStandingService: DriverStandingService,
              private router: Router,
              private seasonSelectedData: SeasonSelectedData,
              private seasonService: SeasonService) {
    this.seasonSelectedData.seasonSelected.subscribe((value: Season) => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.getDriverStandingsOfCurrentSeason();
    this.seasonSelected = this.seasonService.seasons[0];
  }

  onChangeSeason(season: Season) {
    this.seasonSelected = season;
    this.getDriverStandingsOfCurrentSeason(season.year);
  }

  getDriverStandingsOfCurrentSeason(season?: number): void {
    this.loading = true;
    this.driverStandingService.getDriverStandingsBySeason(season).subscribe({
      next: (driverStandings: DriverStanding[]) => {
        this.driverStandings = driverStandings;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  redirectDriver(driverId: number): void {
    this.router.navigateByUrl(`/driver/${driverId}/${this.seasonSelected.year}`);
  }

}
