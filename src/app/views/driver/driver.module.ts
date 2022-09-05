import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverPageRoutingModule } from './driver-routing.module';

import { DriverPage } from './driver.page';
import {HomePageModule} from "../home/home.module";
import {RacesPageModule} from "../races/races.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DriverPageRoutingModule,
        HomePageModule,
        RacesPageModule
    ],
  declarations: [DriverPage]
})
export class DriverPageModule {}
