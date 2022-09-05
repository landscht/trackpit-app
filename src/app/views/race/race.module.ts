import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacePageRoutingModule } from './race-routing.module';

import { RacePage } from './race.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RacePageRoutingModule,
        HomePageModule
    ],
  declarations: [RacePage]
})
export class RacePageModule {}
