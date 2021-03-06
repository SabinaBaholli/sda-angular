import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { BackendService } from './services/backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  user;
  password;
  dateObj = new Date();
  constructor(
    private router: Router, 
    public backendService: BackendService
    ) {}

  ngOnInit() :void {}

  logOut() {
    this.backendService.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }

}
