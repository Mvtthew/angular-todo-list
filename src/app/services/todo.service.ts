import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	httpOptions = {
		headers: new HttpHeaders({
			'content-type': 'application/json'
		})
	};

	url: string = 'https://jsonplaceholder.typicode.com/todos';

	constructor(private http: HttpClient) { }

	getTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(`${this.url}?_limit=3`);
	}

	updateTodo(todo: Todo): Observable<Todo> {
		return this.http.put<Todo>(`${this.url}/${todo.id}`, todo, this.httpOptions);
	}

	deleteTodo(todo: Todo): Observable<any> {
		return this.http.delete(`${this.url}/${todo.id}`, this.httpOptions);
	}

	addTodo(todo: Todo): Observable<Todo> {
		return this.http.post<Todo>(`${this.url}`, todo, this.httpOptions);
	}
}
