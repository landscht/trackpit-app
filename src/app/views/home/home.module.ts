import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {RaceCardComponent} from "../../components/race/race-card/race-card.component";
import {RaceCardResultComponent} from "../../components/race/race-card-result/race-card-result.component";
import {BannerConstructorComponent} from "../../components/shared/banner-constructor/banner-constructor.component";
import {TeamPreviewComponent} from "../../components/modals/team-preview/team-preview.component";
import {RaceDateComponent} from "../../components/race/race-date/race-date.component";
import {TitleSectionComponent} from "../../components/shared/title-section/title-section.component";
import {CardNumberComponent} from "../../components/shared/card-number/card-number.component";
import {CardChartComponent} from "../../components/shared/card-chart/card-chart.component";
import {
  WorldChampionshipDetailsComponent
} from "../../components/modals/world-championship-details/world-championship-details.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
    exports: [
        RaceDateComponent,
        TitleSectionComponent,
        CardNumberComponent,
        CardChartComponent
    ],
    declarations: [HomePage, RaceCardComponent, RaceCardResultComponent, BannerConstructorComponent, TeamPreviewComponent, RaceDateComponent, TitleSectionComponent, CardNumberComponent, CardChartComponent, WorldChampionshipDetailsComponent]
})
export class HomePageModule {}
