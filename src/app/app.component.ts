import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  username;
  password;

  clickHandler() {
    console.log(this.username, this.password);
  }
}
