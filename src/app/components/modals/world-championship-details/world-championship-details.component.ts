import {Component, Input, OnInit} from '@angular/core';
import {Constructor} from "../../../_models/Constructor";
import {ModalController} from "@ionic/angular";
import {Driver} from "../../../_models/Driver";

@Component({
  selector: 'app-world-championship-details',
  templateUrl: './world-championship-details.component.html',
  styleUrls: ['./world-championship-details.component.scss'],
})
export class WorldChampionshipDetailsComponent implements OnInit {

  @Input() public driver: Driver;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal(): void {
    this.modalController.dismiss();
  }

}
