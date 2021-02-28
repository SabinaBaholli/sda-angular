import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'todo', component: TodolistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
