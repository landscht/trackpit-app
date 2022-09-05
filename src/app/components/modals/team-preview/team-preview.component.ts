import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Constructor} from "../../../_models/Constructor";

@Component({
  selector: 'app-team-preview',
  templateUrl: './team-preview.component.html',
  styleUrls: ['./team-preview.component.scss'],
})
export class TeamPreviewComponent implements OnInit {

  @Input() public team: Constructor;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal(): void {
    this.modalController.dismiss();
  }

}
