import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() item;
  constructor() { }

  ngOnInit() {
    console.log('init')
  }
  
  ngOnChanges() {
    console.log('change')
  }

}
