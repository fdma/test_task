import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleAddComponent } from './people-add/people-add.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';


const routes: Routes = [
	{ path: '', redirectTo: '/people', pathMatch: 'full' },
	{ path: 'people', component: PeopleListComponent },
	{ path: 'people/:id/update', component: PeopleEditComponent },
	{ path: 'people/add', component: PeopleAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }