import { NgModule }           from '@angular/core';

import { WikipediaComponent }   from './wikipedia.component';
import { WikipediaService }     from './wikipedia.service';
import { RouterModule }        from '@angular/router';
import { SharedModule }  from '../share/shared.module';
import { WikipediaRoutingModule } from './wikipedia-routing.module';

@NgModule({
  imports: [
  		WikipediaRoutingModule,
  		SharedModule
  	],
  declarations:[
		WikipediaComponent
	],
	providers: [ WikipediaService ]
})
export class WikipediaModule {}