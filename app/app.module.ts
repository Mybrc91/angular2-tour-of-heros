import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule} from "@angular/http";

 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

import { ContactModule } from './contact/contact.module';

import './rxjs-extensions';





@NgModule({
  imports:      [ 
	BrowserModule,
  FormsModule, 
	AppRoutingModule,
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  ContactModule
	],
  declarations: [ 
  	AppComponent,
  	HeroesComponent ,
  	HeroDetailComponent,
  	DashboardComponent,
    HeroSearchComponent,
    HighlightDirective,
    TitleComponent
  ],
  providers: [
  	HeroService,
    UserService,
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }