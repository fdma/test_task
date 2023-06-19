import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleAddComponent } from './people-add/people-add.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
	{ path: '', redirectTo: 'logged-out', pathMatch: 'full' },
	{ path: 'people/edit/:id', component: PeopleEditComponent },
	{ path: 'people/add', component: PeopleAddComponent },
	{ path: 'people', component: PeopleListComponent, canActivate: [AuthGuard]},
	{path: 'logged-out', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }