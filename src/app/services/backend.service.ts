import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  toDoItems = [
    'grocery',
    'study'
  ];
  
  constructor() { }
  
}
