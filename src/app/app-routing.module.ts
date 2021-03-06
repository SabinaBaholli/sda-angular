import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'todo', component: TodolistComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
