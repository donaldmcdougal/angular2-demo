import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../dtos/hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'app/heroes'; //URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero): Promise<Response> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http.delete(url, headers)
            .toPromise()
            .catch(this.handleError);
  }

  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError)
  }

  private put(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<void> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}