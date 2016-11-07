import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule} from "@angular/http";

 
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';





@NgModule({
  imports:      [ 
	BrowserModule,
  FormsModule, 
	AppRoutingModule,
  HttpModule,
  ContactModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
  declarations: [ 
  	AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  providers: [
    UserService,
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }