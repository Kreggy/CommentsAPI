import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public username = '';
  public password = '';
  private registerURL = 'http://85.160.64.233:3000/session/register';


  constructor(private httpClient: HttpClient, private router: Router) { }



  clickedButton() {
    

      this.httpClient.post(this.registerURL, {
        username: this.username,
        password: this.password,

      }).subscribe(
        (data: any) => {
          this.router.navigate(['/home']);
        }, (error) => {
        }
      );
    
  }

  ngOnInit() {
  }

}