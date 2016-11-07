import { NgModule }           from '@angular/core';

import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { SharedModule }  from '../share/shared.module';


import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
	imports: [
		ContactRoutingModule,
		SharedModule
	],
	declarations:[
		ContactComponent,
	],
	providers:[
		ContactService
	]
})

export class ContactModule {}