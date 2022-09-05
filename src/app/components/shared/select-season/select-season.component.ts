import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Season} from "../../../_models/Season";
import {SeasonService} from "../../../_services/season.service";

@Component({
  selector: 'app-select-season',
  templateUrl: './select-season.component.html',
  styleUrls: ['./select-season.component.scss'],
})
export class SelectSeasonComponent implements OnInit {

  @Input() label = 'Season';
  @Input() lines = 'full';
  @Input() hideLabel = false;
  @Input() transparent = false;
  @Input() defaultSelected!: Season;
  @Input() labelDetails = 'Select the season for which you want to see the details';
  @Input() seasons!: Season[];
  @Output() changeSeason: EventEmitter<Season> = new EventEmitter<Season>();

  public seasonSelected: Season;

  constructor(private seasonService: SeasonService) {}

  ngOnInit() {
    this.seasonSelected = this.defaultSelected ? this.defaultSelected : !this.seasons ? this.seasonService.seasons[0] : this.seasons[0];
    console.log(this.seasonSelected);
  }

  getSeasons(): Season[] {
    return !this.seasons ? this.seasonService.seasons : this.seasons;
  }

  onChangeSeason(): void {
    this.changeSeason.emit(this.seasonSelected);
  }

  compareFn(s1: Season, s2: Season): boolean {
    return s1 && s2 && s1.year === s2.year;
  }

}
