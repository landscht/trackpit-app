import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'constructor-standings',
    loadChildren: () => import('./views/constructor-standings/constructor-standings.module').then( m => m.ConstructorStandingsPageModule)
  },
  {
    path: 'driver-standings',
    loadChildren: () => import('./views/driver-standings/driver-standings.module').then( m => m.DriverStandingsPageModule)
  },
  {
    path: 'races',
    loadChildren: () => import('./views/races/races.module').then( m => m.RacesPageModule)
  },
  {
    path: 'race/:raceId',
    loadChildren: () => import('./views/race/race.module').then( m => m.RacePageModule)
  },
  {
    path: 'driver/:driverId/:season',
    loadChildren: () => import('./views/driver/driver.module').then( m => m.DriverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
