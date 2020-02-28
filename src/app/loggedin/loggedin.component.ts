import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Access from '../Access';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  private logoutURL = 'http://85.160.64.233:3000/session/logout';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  clickedButton() {
    const headers = new HttpHeaders().set('User-Token', Access.access);
    this.httpClient.delete(this.logoutURL, {
      headers
    }).subscribe(
      (data: any) => {
        Access.access = '';
        this.router.navigate(['/home']);
      }, (error) => {
      }
    );
  }
}