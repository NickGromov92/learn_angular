import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'FIRST APP!';
    todos = todos;
}

const todos = [
    "Изучить Java Script",
    "Изучить Angular",
    "Написать приложение"
];
