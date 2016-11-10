import {Component} from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'my-app',
  	template: `
    	<app-title [subtitle]='subtitle'></app-title>
    	<nav>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
    		<a routerLink="/crisis" routerLinkActive="active">Crisis</a>
    		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a routerLink="/wikipedia" routerLinkActive="active">Wikipedia</a>
    	</nav>
    	<router-outlet></router-outlet>
  	`,
  	styleUrls: ['app.component.css']
})

export class AppComponent{
	subtitle = '(v3)';
}