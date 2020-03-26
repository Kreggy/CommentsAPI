import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private username: string;
  private email: string;
  private password: string;
  private checkpassword: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  

  register() {
    const body = {
      username: this.username,
      email:this.username,
      password: this.password,
      password_confirmation: this.checkpassword,
    }
    this.authenticationService.getRegister(this.username, this.email, this.password, this.checkpassword).subscribe(i => {
      this.router.navigate(['users/']);
    });
  }

  ngOnInit() {
  }

}
