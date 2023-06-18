import { Component, OnInit } from '@angular/core';

import { People } from '../interfaces/people';
import { PeopleService } from '../services/people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  readonly peoples$: Observable<People[]> = this.peopleService.getPeople();

  constructor(private peopleService: PeopleService) { }

  delete(people: People): void {
		this.peopleService.deletePeople(people).subscribe( );
	}
}
