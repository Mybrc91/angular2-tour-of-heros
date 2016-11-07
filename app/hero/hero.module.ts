import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }   from './heroes.component';
import { SharedModule }  from '../share/shared.module';
import { HeroRoutingModule }   from './hero-routing.module';

@NgModule({
  imports: [ HeroRoutingModule ,SharedModule],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroesComponent,
    
  ]
})
export class HeroModule { }