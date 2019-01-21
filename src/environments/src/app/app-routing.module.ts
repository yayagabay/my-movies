import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
{
  path:'',
  redirectTo:'/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: MoviesComponent
},
{
  path: 'search',
  component: MovieSearchComponent
},
{
  path: 'todo',
  component: TodoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MoviesComponent,MovieSearchComponent]
