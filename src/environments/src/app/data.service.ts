import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/Movie';
import { Observable, pipe } from 'rxjs';
import { map } from "rxjs/operators";
import moviesController from 'server/src/controllers/moviesController';
import { TypeaheadOptions } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  movie: Movie = {
    Title: '',
    Year: 0,
    Runtime: '',
    Genre: '',
    Director: '',
    Poster: '',
    Imdbid: ''
  };
  // private _url: string = "/assets/data/movies.json";
  API_URI = 'http://localhost:5000/api';

  constructor(private http: HttpClient,private router: Router) { }

  getMovies() {
    return this.http.get(`${this.API_URI}/movies`);
  }

  getMovie(id: String) {
    return this.http.get(`${this.API_URI}/movies/${id}`);
  }

  checkExist(id: String) {
    return this.http.get(`${this.API_URI}/movies/check/${id}`);
  }

  deleteMovie(id: String) {
    return this.http.delete(`${this.API_URI}/movies/${id}`);
  }

saveMovie(string,id) {
    this.checkExist(id);
    let m:Movie = <Movie>JSON.stringify(string);
    console.log(string);
 this.movie.Title=string.Title;
    this.movie.Year=string.Year;
    this.movie.Runtime=string.Runtime;
    this.movie.Genre=string.Genre;
    this.movie.Director=string.Director;
    this.movie.Poster=string.Poster;
    this.movie.Imdbid=id;
    console.log(this.movie);
    this.http.post(`${this.API_URI}/movies`,this.movie)
    .subscribe(
      res => {
            console.log(res);
            this.getMovies();
            this.router.navigate(['/home']);

          },
          err => console.error(err)
        )
      }     
        

  updateMovie(id: string|number, updatedMovie: Movie): Observable<Movie> {
    return this.http.put(`${this.API_URI}/movies/${id}`, updatedMovie);
  }


  getMovieFromOmdb(id: String): Observable<Movie[]>{
    return this.http.get<Movie[]>(`http://www.omdbapi.com/?i=${id}&apikey=a83332e8`);
  }

  searchMovieByTitle(title: String): Observable<Movie[]>{
    return this.http.get<Movie[]>(`http://www.omdbapi.com/?s=${title}&apikey=a83332e8`);
  }


}
