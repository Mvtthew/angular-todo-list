import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	todoList: Todo[];

	constructor(private todoService: TodoService) { }

	ngOnInit(): void {
		this.todoService.getTodos().subscribe(todos => this.todoList = todos);
	}

}
