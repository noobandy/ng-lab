import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import {RestaurantTableComponent } from './restaurant-table/restaurant-table.component'

const routes: Routes = [{
  path: '',
  redirectTo: '/todos',
  pathMatch: 'full'
}, {
  path: "todos",
  component: HomeComponent,
  children: [{
    path: "list",
    component: TodoListComponent
  }, {
    path: 'new',
    component: TodoCreateComponent
  }]
}, {
  path: "about",
  component: AboutComponent
}, {
  path: "contact",
  component: ContactComponent
}, {
  path: "restaurants",
  component: RestaurantTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
