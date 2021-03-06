import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
 
  constructor(
    private router: Router,
    private backendService: BackendService
    ) { }

  ngOnInit(): void {
  }
  
  onAddForm(formValue: NgForm) {
    this.user = formValue.value.username;
    this.backendService.isLoggedIn = true;
    this.router.navigateByUrl('/');
  }

}
