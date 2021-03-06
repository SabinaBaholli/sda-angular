import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemListModel } from 'src/app/models/itemlist.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  newItem: ItemListModel = {
    title: '',
    description: ''
  };
  items;

  constructor(
    public backendService: BackendService
  ) { }
  

  ngOnInit(): void {
    this.backendService.getItems()
    .subscribe((response) => { 
      this.items = response;
    });
  }

  addItem(form: NgForm): void {
    this.newItem = form.value;
    this.backendService.addItem(this.newItem).subscribe((res) => {
      this.items.push(this.newItem);
      form.resetForm();
    });
  }

}
