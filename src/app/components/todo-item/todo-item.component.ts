import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
	@Input() todo: Todo;
	@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

	constructor(private todoService: TodoService) { }

	ngOnInit(): void {
	}

	setClasses() {

		let classes = {
			'todo': true,
			'completed': this.todo.completed
		}

		return classes;
	}

	toggleCompleted():void {
		// Update UI
		this.todo.completed = !this.todo.completed;
		// Update on server
		this.todoService.toggleCompleted(this.todo).subscribe(todo => console.log(todo));
	}

	onDelete():void {
		this.deleteTodo.emit(this.todo);
	}

}
