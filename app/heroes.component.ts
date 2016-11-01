import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  //providers : [HeroService],		
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{
	ngOnInit(): void{
		this.getHeroes();
	}

	constructor(
		private router: Router,
		private heroService :HeroService){};

	getHeroes(): void {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}

  	gotoDetail(): void{
  		this.router.navigate(['/detail' , this.selectedHero.id]);
  	}

	title = 'Tour of Heroes';
	selectedHero: Hero;

	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}
	hero: Hero = {
		id:1,
		name:'windstorm'
	};
	heroes : Hero[];
 }
