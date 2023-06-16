import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.scss']
})
export class PeopleAddComponent implements OnInit {

	@Input() people: People = { firstname: '', lastname: '', email: '', age: '', city: '' };
	
	constructor(private peopleService: PeopleService, private location: Location) { }
	
	ngOnInit() {
	}
	
	save(): void {
		this.peopleService.addPeople(this.people).subscribe(() => this.goBack());
	}
	
	goBack(): void {
		this.location.back();
	}

}