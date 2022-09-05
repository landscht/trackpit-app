import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverStandingsPageRoutingModule } from './driver-standings-routing.module';

import { DriverStandingsPage } from './driver-standings.page';
import {RacesPageModule} from "../races/races.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DriverStandingsPageRoutingModule,
        RacesPageModule
    ],
  declarations: [DriverStandingsPage]
})
export class DriverStandingsPageModule {}
