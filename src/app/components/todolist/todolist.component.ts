import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  newItem;
  items = this.bs.toDoItems;

  constructor(
    private bs: BackendService
  ) { }

  ngOnInit() {
    console.log('init')
  }

  addItem() {
    this.bs.toDoItems.push(this.newItem);
  }

}
