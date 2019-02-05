import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from './models/Movie';
import moviesController from 'server/src/controllers/moviesController';
import { TypeaheadOptions } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, catchError, mergeMap,map } from 'rxjs/operators';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { of, throwError as observableThrowError,Observable, pipe, observable  } from "rxjs"


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
  ID: String;
  Title: String;
  exist: Boolean;
  movies: any = [];

  //PROD
  API_URI = '/api';

  //DEV
  // API_URI = 'http://localhost:5000/api';


  errorMsg: any = [];

  constructor(private http: HttpClient, private router: Router) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_URI}/movies`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('client side error: ' , errorResponse.error.message);
      return observableThrowError(errorResponse.message || "Client error");
    }else{
      console.error('server side error: ' , errorResponse);
      return observableThrowError(errorResponse || "Server error");
    }
  }

  getMovie(id: String) {
    return this.http.get(`${this.API_URI}/movies/${id}`);
  }

  checkExist(id: String) {
    this.ID = id;
    console.log(id);
    return this.http.get(`${this.API_URI}/movies/checkexist/${id}`)
    .pipe(catchError(this.errorHandler));

  }
  checkTitle(title: String,id: String) {

    this.Title = title;
    console.log(title);
    console.log(id);
    return this.http.get(`${this.API_URI}/movies/checktitle/${title}/${id}`)
    .pipe(catchError(this.errorHandler));

  }


  deleteMovie(id: String) {
    return this.http.delete(`${this.API_URI}/movies/${id}`);
  }

  saveMovie(string, id) {
    let m: Movie = <Movie>JSON.stringify(string);
    //  console.log(string);
    this.movie.Title = string.Title.replace(/[^a-zA-Z ]/g, "");
    this.movie.Year = string.Year;
    this.movie.Runtime = string.Runtime;
    this.movie.Genre = string.Genre;
    this.movie.Director = string.Director;
    this.movie.Poster = string.Poster;
    this.movie.Imdbid = id;
    //  console.log(this.movie);
    this.http.post(`${this.API_URI}/movies`, this.movie)
      .subscribe(
        res => {
          //  console.log(res);
          this.getMovies();
          this.router.navigate(['/home']);

        },
        err => {
          console.error(err);
          this.getMovies();
          this.router.navigate(['/home']);
        }
      )
  }


  updateMovie(id: String | number, updatedMovie: Movie): Observable<Movie> {
    return this.http.put(`${this.API_URI}/movies/${id}`, updatedMovie)
    .pipe(catchError(this.errorHandler));
  }


  getMovieFromOmdb(id: String): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://www.omdbapi.com/?i=${id}&apikey=a83332e8`);
  }

  searchMovieByTitle(title: String): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://www.omdbapi.com/?s=${title}&apikey=a83332e8`);
    }
}
