import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-in
  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/login?email=${user.email}&password=${user.password}`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['people/' + res.msg._id]);
        });
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}