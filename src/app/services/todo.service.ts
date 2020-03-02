import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	url: string = 'https://jsonplaceholder.typicode.com/todos';
	limitFilter: string = '_limit=5';

	constructor(private http: HttpClient) { }

	getTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(`${this.url}?${this.limitFilter}`);
	}
}
