import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  signupData = {
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
  };

  loginData = {
    email: '',
    password: ''
  };

  onSignUpSubmit() {
    // Handle sign-up logic
    console.log('Sign Up Data:', this.signupData);
  }

  onLoginSubmit() {
    // Handle login logic
    console.log('Login Data:', this.loginData);
  }

  constructor(private router: Router) { }
}
