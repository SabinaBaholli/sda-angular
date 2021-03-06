import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  isLoggedIn = false;
  toDoItems = [
    'grocery',
    'study'
  ];

  private serverUrl = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'todoitems');
  }

  addItem(item): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'todoitems', item);
  }
  
}
