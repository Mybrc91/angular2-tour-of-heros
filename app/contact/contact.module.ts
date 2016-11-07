import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';


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