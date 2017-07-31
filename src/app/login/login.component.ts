import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from './authen.service'


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  

  constructor(
    private router : Router,
    private authenService : AuthenService){
  }
  
  ngOnInit(){
    this.authenService.logout();
  }

  login(){
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password)
    .subscribe(result => {
        if (result === true){
            this.router.navigate(['dashboard']);
        } else {
            this.error = 'Username or password not correct';
            this.loading = false;
        }
    }, error => {this.loading = false; this.error = error;})
  }
}
