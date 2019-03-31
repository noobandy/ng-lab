import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo, TodoService} from "../todo.service"

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

  @Output()
  onNew: EventEmitter<any> = new EventEmitter()

  todos: Todo[];
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.loadTodos()
  }

  handleNewClick(): void {
    console.log('Clicked in list')
    this.onNew.emit()
  }
}
