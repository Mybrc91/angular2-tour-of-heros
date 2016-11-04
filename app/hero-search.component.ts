import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
	moduleId: module.id,
	selector: 'hero-search',
	templateUrl: 'hero-search.component.html',
	styleUrls: ['hero-search.component.css'],
	providers: [HeroSearchService]

})

export class HeroSearchComponent implements OnInit{
	heroes: Observable<Hero[]>;
	private searchTeims = new Subject<string>();

	constructor(private heroSearchSerivce :HeroSearchService,
		private router: Router){}

	search(trem: string): void{
		this.searchTeims.next(trem);
	}

	ngOnInit():void{
		this.heroes = this.searchTeims
						.debounceTime(300)
						.distinctUntilChanged()
						.switchMap( trem => trem?this.heroSearchSerivce.search(trem):Observable.of<Hero[]>([]))
						.catch(error => {
							console.log(error);
							return Observable.of<Hero[]>([]);
						})
	}

	gotoDetail(hero :Hero):void{
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}
