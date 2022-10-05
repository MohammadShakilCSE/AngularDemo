import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlartfyService } from 'src/app/services/alartfy.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alartfy: AlartfyService,
    private router:Router
  ) {}

  ngOnInit(): void {}
  submitForm(data: NgForm) {
    console.log(data.value);
    const userAuth = this.authService.auth(data.value);
    if (userAuth) {
      localStorage.setItem('token', userAuth.UserName);
      this.alartfy.success('Login successfull');
      this.router.navigate(["./"]);
    } else {
      this.alartfy.error('Login not successfull');
    }
  }
}
