import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstructorStandingsPageRoutingModule } from './constructor-standings-routing.module';

import { ConstructorStandingsPage } from './constructor-standings.page';
import {RacesPageModule} from "../races/races.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConstructorStandingsPageRoutingModule,
        RacesPageModule
    ],
  declarations: [ConstructorStandingsPage]
})
export class ConstructorStandingsPageModule {}
