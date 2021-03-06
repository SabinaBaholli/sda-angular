import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  isLoggedIn = false;
  toDoItems = [
    'grocery',
    'study'
  ];
  
  constructor() { }
  
}
