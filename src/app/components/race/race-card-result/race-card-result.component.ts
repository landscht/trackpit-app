import {Component, Input, OnInit} from '@angular/core';
import {Race} from "../../../_models/Race";

@Component({
  selector: 'app-race-card-result',
  templateUrl: './race-card-result.component.html',
  styleUrls: ['./race-card-result.component.scss'],
})
export class RaceCardResultComponent implements OnInit {

  @Input() public race: Race;

  constructor() { }

  ngOnInit() {}

}
