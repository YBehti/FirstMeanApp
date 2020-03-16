import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthDataModel } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


const BACKEND_URL = environment.appUrl + 'users/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private expireTimer: any;
  private userId: string;

  constructor(private http: HttpClient, private router: Router) { }

  getUserId() {
    return this.userId;
  }

  getToken() {
    return this.token;
  }

  getAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string) {
    const authData: AuthDataModel = {
      email,
      password
    };
    this.http.post(BACKEND_URL + 'signup', authData).subscribe(response => {
      console.log(response);
      this.router.navigate(['/']);
    }, error => {
      this.authStatusListener.next(false);
    });
  }

  login(email: string, password: string ) {
    const authData: AuthDataModel = {
      email,
      password
    };
    this.http.post<{
      token: string,
      expiresIn: number,
      userId: string
    }>(BACKEND_URL + 'login', authData)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {
        this.userId = response.userId;
        this.authStatusListener.next(true);
        this.isAuthenticated = true;
        const now = new Date();
        const expirationDate = new Date (now.getTime() + (response.expiresIn * 1000));
        this.saveAuthData(token, expirationDate, this.userId);
        this.setAuthTimer(response.expiresIn);
        this.router.navigate(['/']);
      }



    }, error => {
      this.authStatusListener.next(false);
    });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.userId = null;
    this.authStatusListener.next(false);
    clearTimeout(this.expireTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  autoAuth() {

    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }

    const now = new Date();
    const expireIn = new Date(authInfo.expirationDate).getTime() - now.getTime();
    if (expireIn > 0) {
      this.token = authInfo.token;
      this.authStatusListener.next(true);
      this.isAuthenticated = true;
      this.userId = authInfo.userId;
      this.setAuthTimer(expireIn / 1000);
    }


  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
  }

  private setAuthTimer(duration: number) {
    console.log('Timer: ' + duration);
    this.expireTimer =  setTimeout(() => {
      this.logout();
    }, duration * 1000);


  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate,
      userId
    };
  }

}
