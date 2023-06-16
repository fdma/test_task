import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { People } from './people';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleUrl = '/people';

  getPeople(id: string | null): Observable<People[]> {
    return this.http.get<People[]>(this.peopleUrl);
  }

  addPeople(people: People) {
      return this.http.post(this.peopleUrl + '/', people, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }

  updatePeople(people: People): Observable<any> {
    return this.http.put(this.peopleUrl + '/' + people.id, people, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }

  deleteProduct(people: People) {
	  if (confirm("Are you sure to delete?")) {
		console.log(people);
		
		const options = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json',
		  }),
		  body: people,
		  responseType: 'text' as 'json'
		};
		
		return this.http.delete(this.peopleUrl + '/' + people.id, options);
	  }
	  
	  return of({});
  }

  constructor(private http: HttpClient) {  }
}
