import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  peoples: People[] = [];

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(peoples => this.peoples = peoples);
  }

  delete(people: People): void {
		this.peopleService.deleteProduct(people).subscribe(success => {this.getPeople();});
	}
}
