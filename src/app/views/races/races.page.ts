import { Component, OnInit } from '@angular/core';
import {RaceService} from "../../_services/race.service";
import {Race} from "../../_models/Race";
import {SeasonRaces} from "../../_models/SeasonRaces";
import {SeasonSelectedData} from "../../_data/SeasonSelectedData";
import {Season} from "../../_models/Season";

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {

  public seasonRaces: SeasonRaces;
  public segment = 'next';
  public loading = false;

  constructor(private raceService: RaceService) {
  }

  ngOnInit() {
    this.getSeasonRaces();
  }

  onChangeSeason(season: Season): void {
    this.getSeasonRaces(season.year);
  }

  getSeasonRaces(season?: number): void {
    this.loading = true;
    this.seasonRaces = new SeasonRaces();
    this.raceService.getSeasonRacesByYear(season).subscribe({
      next: (seasonRaces: SeasonRaces) => {
        this.seasonRaces = seasonRaces;
        this.segment = seasonRaces.nextRaces.length > 0 ? 'next' : 'passed';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

}
