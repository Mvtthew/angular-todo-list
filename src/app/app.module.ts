import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo-list/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoAddComponent } from './components/todo-list/todo-add/todo-add.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		HeaderComponent,
		AboutComponent,
		TodoListComponent,
		TodoComponent,
		TodoAddComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
