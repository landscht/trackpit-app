import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.scss'],
})
export class CardNumberComponent implements OnInit {

  @Input() public num = 0;
  @Input() public details = '';

  constructor() { }

  ngOnInit() {}

}
