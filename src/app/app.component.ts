import {Component} from '@angular/core';
import {Event} from "_debugger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FIRST APP!';
  todos: Todo[] = todos;

  newTodoTitle: string;

  toggle(todo: Todo) {
    todo.status = !todo.status;
  };

  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  };

  create() {


    let todo: Todo = new Todo(this.newTodoTitle);

    this.todos.push(todo);

    this.newTodoTitle = '';
  }

}

class Todo {
  constructor (public title: string,
               public status: boolean = false){}
}

const todos: Todo[] = [
  {
    title: "Изучить Java Script",
    status: true
  },
  {
    title: "Изучить Angular",
    status: false
  },
  {
    title: "Написать приложение",
    status: false
  }
];
