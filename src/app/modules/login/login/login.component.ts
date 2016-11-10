import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService) {

    loginService.getLoginStore().subscribe(
      data => {  console.log(data); }
    )

  }

  ngOnInit() {
  }

  login() {
    this.loginService.login();
  }

}