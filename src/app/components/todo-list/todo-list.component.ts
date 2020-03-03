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

	deleteTodo(todo: Todo): void {
		// Delete on UI
		this.todoList = this.todoList.filter(v => v.id != todo.id);
		// Send DELETE request
		this.todoService.deleteTodo(todo).subscribe();
	}

	addTodo(todo: Todo): void {
		// Update on UI (normally I'll pull list to get id etc)
		this.todoList.unshift(todo);
		// Send POST request
		this.todoService.addTodo(todo).subscribe();
	}

}
