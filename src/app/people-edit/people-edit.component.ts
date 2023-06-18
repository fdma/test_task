import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { People } from '../interfaces/people';
import { PeopleService } from '../services/people.service';
import { Observable, switchMap, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.scss'],
})
export class PeopleEditComponent {
	people$: Observable<People> = this.route.paramMap.pipe(
		switchMap(params => this.peopleService.getPersonById(<string>params.get('id'))),
		tap((p: People) => this.formGroup.patchValue(p))
	)

	readonly formGroup = new FormGroup({
		firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
		lastname: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
	})
	
	constructor(private route: ActivatedRoute, private peopleService: PeopleService, private location: Location) { }
	

	save(): void {
		const people = this.formGroup.value as People;
		this.peopleService.updatePeople(people).subscribe(() => {this.goBack();});
	}
	
	goBack(): void {
			this.location.back();
	}
}