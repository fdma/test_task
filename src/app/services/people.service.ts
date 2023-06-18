import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { People } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {  }

  private peopleUrl = '/people/';

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.peopleUrl);
  }

  getPersonById(id: string): Observable<People> {
    const url = `${this.peopleUrl}${id}`;
    return this.http.get<People>(url);
  }

  addPeople(people: People) {
      return this.http.post(this.peopleUrl, people, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  updatePeople(people: People): Observable<any> {
    return this.http.put(this.peopleUrl + people.id, people, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  deletePeople(people: People) {
	  if (confirm("Are you sure to delete?")) {
		
		const options = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json',
		  }),
		  body: people
		};
		
		return this.http.delete(this.peopleUrl + '/' + people.id, options);
	  }
	  
	  return of({});
  }
}
