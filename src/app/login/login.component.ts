import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import Access from '../Access';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public password = '';
  public username = '';
  private loginURL = 'http://85.160.64.233:3000/session/login';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  clickedButton() {
    this.httpClient.post(this.loginURL, {
      username: this.username,
      password: this.password,
    }).subscribe(
      (data: any) => {
        Access.access = data.Access;
        this.router.navigate(['/loggedin']);
      }, (error) => {
      }
    );
  }


}