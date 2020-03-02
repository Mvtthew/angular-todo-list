import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutComponent } from './views/about/about.component';


const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'about', component: AboutComponent },
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	}	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
