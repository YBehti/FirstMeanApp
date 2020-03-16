import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  authStatusSub: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit() {

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
      this.isLoading = false;
      console.log(authStatus);

    });
  }

  onLogin(form: NgForm) {
    this.isLoading = true;
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.email, form.value.password);




   }

   ngOnDestroy() {
     this.authStatusSub.unsubscribe();
   }

}
