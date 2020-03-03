import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-todo-list';

	constructor(router: Router) {
		router.events.subscribe(e => {
			// Every time you go to new path hide bs collapse
			$('.collapse').collapse('hide');
		});
	}
}
