import { Injectable }  from '@angular/core';
//import { HEROES } from './mock-heroes';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

export class Hero{
	constructor(public id: number,public name: string){}
}

@Injectable()
export class HeroService{

	private heroesUrl = 'app/heroes'; 
	private headers = new Headers({'Content-Type': 'application/json'});


	constructor(private http:Http){}

	update(hero: Hero):Promise<Hero>{
		const url = `${this.heroesUrl}/${hero.id}`;
		console.error("url"+hero);
		return this.http
				.put(url , JSON.stringify(hero), {headers: this.headers})
				.toPromise()
				.then(() =>hero)
				.catch(this.handleError);
	}

	create(name: String): Promise<Hero>{
		return this.http
				.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
				.toPromise()
				.then(res => res.json().data)
				.catch(this.handleError);
	}

	delete(id: number):Promise<void>{
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url , {headers : this.headers})
					.toPromise()
					.then(() => null)
					.catch(this.handleError);
	}

	getHeroes(): Promise<Hero[]> {
		//return Promise.resolve(HEROES);
		return this.http.get(this.heroesUrl)
					.toPromise()
					.then(response => response.json().data as Hero[])
					.catch(this.handleError);
	}

	getHeroesSlowly(): Promise<Hero[]>{
		return new Promise<Hero[]>(resolve =>
			setTimeout(resolve , 2000))
			.then(() => this.getHeroes());
	}

	getHero(id: number): Promise<Hero>{
		return this.getHeroes()
					.then(heroes => heroes.find(hero => hero.id === id));
	}

	private handleError(error: any): Promise<any>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}