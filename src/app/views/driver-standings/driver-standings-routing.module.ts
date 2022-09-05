import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverStandingsPage } from './driver-standings.page';

const routes: Routes = [
  {
    path: '',
    component: DriverStandingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverStandingsPageRoutingModule {}
