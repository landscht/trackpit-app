import {Component, OnInit} from '@angular/core';
import {SeasonService} from "./_services/season.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Races', url: '/races', icon: 'flag' },
    { title: 'Drivers', url: '/driver-standings', icon: 'id-card' },
    { title: 'Teams', url: '/constructor-standings', icon: 'browsers' },
    { title: 'Statistics', url: '/stats', icon: 'stats-chart' },
  ];

  constructor(private seasonService: SeasonService) {
  }

  ngOnInit(): void {
    this.seasonService.initSeasons();
  }

}
