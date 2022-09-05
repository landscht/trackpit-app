import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss'],
})
export class TitleSectionComponent implements OnInit {

  @Input() public title = '';
  @Input() public buttonText = 'See more';
  @Input() public routerLink = '';
  @Input() public hideButton = false;

  constructor() { }

  ngOnInit() {}

}
