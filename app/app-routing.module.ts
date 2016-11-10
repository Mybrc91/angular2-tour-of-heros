import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'crisis',  loadChildren: 'app/crisis/crisis.module#CrisisModule'},
  { path: 'heroes',  loadChildren: 'app/hero/hero.module#HeroModule'},
  { path: 'wikipedia',  loadChildren: 'app/wiki/wikipedia.module#WikipediaModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}