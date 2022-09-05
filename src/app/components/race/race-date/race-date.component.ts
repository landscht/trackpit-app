import {Component, Input, OnInit} from '@angular/core';
import {Race} from '../../../_models/Race';

@Component({
  selector: 'app-race-date',
  templateUrl: './race-date.component.html',
  styleUrls: ['./race-date.component.scss'],
})
export class RaceDateComponent implements OnInit {

  @Input() public race: Race;

  constructor() { }

  get isSprintFormat(): boolean {
    return !!this.race.sprintDate;
  }

  ngOnInit() {
  }

}
