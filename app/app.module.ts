import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule , JsonpModule} from "@angular/http";

 
import { AppComponent } from './app.component';
import { SharedModule } from './share/shared.module';
import { CoreModule } from './core/core.module';

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
	AppRoutingModule,
  HttpModule,
  JsonpModule,
  ContactModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  SharedModule,
  CoreModule.forRoot({userName: 'Cheng zg'})
	],
  declarations: [ 
  	AppComponent,
  ],
  providers: [
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }