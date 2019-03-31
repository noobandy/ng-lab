import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})

export class TodoCreateComponent implements OnInit {
  details: String

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.todoService.createTodo(this.details)
  }

}
