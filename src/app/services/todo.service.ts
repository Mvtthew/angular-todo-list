import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'content-type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
	limit: string = '?_limit=15';

	constructor(private http: HttpClient) { }

	getTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`);
	}

	toggleCompleted(todo: Todo): Observable<any> {
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.put(url, todo, httpOptions);
	}

	deleteTodo(todo: Todo): Observable<Todo> {
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.delete<Todo>(url, httpOptions);
	}
}
