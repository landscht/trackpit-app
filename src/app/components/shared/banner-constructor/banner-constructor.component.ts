import {Component, Input, OnInit} from '@angular/core';
import {Constructor} from "../../../_models/Constructor";

@Component({
  selector: 'app-banner-constructor',
  templateUrl: './banner-constructor.component.html',
  styleUrls: ['./banner-constructor.component.scss'],
})
export class BannerConstructorComponent implements OnInit {

  @Input() team: Constructor;

  constructor() { }

  ngOnInit() {}

}
