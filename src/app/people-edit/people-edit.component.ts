import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.scss']
})
export class PeopleEditComponent implements OnInit {

	@Input() people: People;
	
	constructor(private route: ActivatedRoute, private peopleService: PeopleService, private location: Location) { }
	
	ngOnInit() {
		this.getPeople();
	}
	
	getPeople(): void {
		const id = this.route.snapshot.paramMap.get('id');
    // this.peopleService.getPeople(id).subscribe(people => this.people = people);
	}
	
	save(): void {
		this.peopleService.updatePeople(this.people).subscribe(success=> {this.goBack();});
	}
	
	goBack(): void {
		this.location.back();
	}

}