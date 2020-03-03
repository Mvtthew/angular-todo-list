import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

	@Input() todo: Todo;
	@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

	constructor(private todoService: TodoService) { }

	ngOnInit(): void {
	}

	// Toggle todo complted state
	toggleCompleted(): void {
		// Toggle on ui
		this.todo.completed = !this.todo.completed;
		// Update model
		this.todoService.updateTodo(this.todo).subscribe();
	}

	// Delete todo
	delete(): void {
		this.deleteTodo.emit(this.todo);
	}

}
