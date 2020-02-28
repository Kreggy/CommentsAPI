import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  public username = '';
  public password = '';
  private getInfoURL = 'http://85.160.64.233:3000/user';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  clickedButton() {

    this.httpClient.get(this.getInfoURL, {


    }).subscribe(
      (data: any) => {

      }
      , (error) => {
      }
    );

  }

  ngOnInit() {
  }

}
