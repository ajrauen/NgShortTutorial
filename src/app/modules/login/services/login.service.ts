import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { AuthModel } from '../models/auth.model';
import * as loginAction from '../actions/login.action';

@Injectable()
export class LoginService {

  authorized: boolean;

  private login$: Observable<AuthModel>;

  constructor(private router: Router, private store: Store<AuthModel>) {
    this.login$ = store.select('login');

    // this.login$.subscribe(
    //   data => {  console.log(data); }
    // )
  }

  login() {
    this.authorized = true;
    this.store.dispatch(new loginAction.LoginAction(true));
    this.router.navigate(['']);
  }

  getLoginStore(){
    return this.login$;
  }

}
