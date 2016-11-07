import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero,HeroService } from './hero.service';
import { ActivatedRoute } from '@angular/router';

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
		private router: ActivatedRoute,
		private heroService :HeroService){};

	add(name: String):void{
		name = name.trim();
		if(!name) {
			return;
		}
		this.heroService.create(name)
			.then(hero =>{
				this.heroes.push(hero);
				this.selectedHero = null;
			});
	}
	delete(hero: Hero):void{
		this.heroService
			.delete(hero.id)
			.then(() => {
				this.heroes = this.heroes.filter(h => h !== hero);
				if(this.selectedHero === hero) {
					this.selectedHero = null;
				}
			});
	}

	getHeroes(): void {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}

  	gotoDetail(): void{
  		//this.router.navigate(['/detail' , this.selectedHero.id]);
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
