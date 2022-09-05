import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstructorStandingsPage } from './constructor-standings.page';

const routes: Routes = [
  {
    path: '',
    component: ConstructorStandingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructorStandingsPageRoutingModule {}
