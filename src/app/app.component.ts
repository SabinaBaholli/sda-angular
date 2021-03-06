import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { BackendService } from './services/backend.service';
import {MatDialog} from '@angular/material/dialog'

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
    public backendService: BackendService,
    public dialog: MatDialog
    ) {}

  ngOnInit() :void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logOut() {
    this.backendService.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: '<h1>Dialog</h1><br><div>Content</div>',
})
export class DialogContentExampleDialog {}
