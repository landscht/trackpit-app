import { Component, OnInit } from '@angular/core';
import {ConstructorStanding} from "../../_models/ConstructorStanding";
import {ConstructorStandingService} from "../../_services/constructorStanding.service";
import {Season} from "../../_models/Season";

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.page.html',
  styleUrls: ['./constructor-standings.page.scss'],
})
export class ConstructorStandingsPage implements OnInit {

  public constructorStandings: ConstructorStanding[] = [];
  public loading = false;

  constructor(private constructorStandingService: ConstructorStandingService) { }

  ngOnInit() {
    this.getConstructorStandingsOfCurrentSeason();
  }

  onChangeSeason(season: Season): void {
    this.getConstructorStandingsOfCurrentSeason(season.year);
  }

  getConstructorStandingsOfCurrentSeason(season?: number): void {
    this.loading = true;
    this.constructorStandingService.getConstructorStandingsOfCurrentSeason(season).subscribe({
      next: (constructorStandings: ConstructorStanding[]) => {
        this.constructorStandings = constructorStandings;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

}
