import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { NgModel } from '@angular/forms';

@Component({
	selector: 'app-todo-add',
	templateUrl: './todo-add.component.html',
	styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

	title: string = '';
	@Output() addTodo: EventEmitter<Todo> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	add(ngModel: NgModel): void {
		if (this.title) {
			this.addTodo.emit({ id: null, title: this.title, completed: false });
			this.title = '';
			ngModel.reset();
		}
	}

}
