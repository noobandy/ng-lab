import { Injectable } from '@angular/core';
import todos from '../assets/mocks/todos.json'

export interface Todo {
  id: Number,
  details: String,
  completed: Boolean
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  loadTodos(): Todo[] {
    return todos
  }

  createTodo(details: String): void {
    console.log(details)
  }
}
