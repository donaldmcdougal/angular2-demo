import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Crisis } from '../dtos/crisis';

@Injectable()
export class CrisisService {

  private crisisesUrl = 'app/crisises'; //URL to web api

  constructor(private http: Http) { }

  getCrisises(): Promise<Crisis[]> {
    return this.http.get(this.crisisesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
  }

  getCrisis(id: number): Promise<Crisis> {
    return this.getCrisises()
            .then(crisises => crisises.filter(crisis => crisis.id === id)[0]);
  }

  save(crisis: Crisis): Promise<Crisis> {
    if (crisis.id) {
      return this.put(crisis);
    }
    return this.post(crisis);
  }

  delete(crisis: Crisis): Promise<Response> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.crisisesUrl}/${crisis.id}`;

    return this.http.delete(url, headers)
            .toPromise()
            .catch(this.handleError);
  }
  
  private post(crisis: Crisis): Promise<Crisis> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    return this.http
            .post(this.crisisesUrl, JSON.stringify(crisis), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
  }

  private put(crisis: Crisis): Promise<Crisis> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.crisisesUrl}/${crisis.id}`;

    return this.http
            .put(url, JSON.stringify(crisis), {headers: headers})
            .toPromise()
            .then(() => crisis)
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<void> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
