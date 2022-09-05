import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacesPageRoutingModule } from './races-routing.module';

import { RacesPage } from './races.page';
import {SelectSeasonComponent} from "../../components/shared/select-season/select-season.component";
import {SkeletonStandingComponent} from "../../components/skeleton/skeleton-standing/skeleton-standing.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacesPageRoutingModule
  ],
  exports: [
    SelectSeasonComponent,
    SkeletonStandingComponent
  ],
  declarations: [RacesPage, SelectSeasonComponent, SkeletonStandingComponent]
})
export class RacesPageModule {}
