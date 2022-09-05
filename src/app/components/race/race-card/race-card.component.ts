import {Component, Input, OnInit} from '@angular/core';
import {Race} from "../../../_models/Race";

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.scss'],
})
export class RaceCardComponent implements OnInit {

  @Input() public race!: Race;

  constructor() { }

  ngOnInit() {}

}
