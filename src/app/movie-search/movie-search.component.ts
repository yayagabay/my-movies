import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from '../data.service';
import { Movie } from '../models/Movie';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movie: Movie = {
    Title: '',
    Year: 1,
    Runtime: '',
    Genre: '',
    Director: '',
    Poster: '',
    Imdbid: ''
  };
  movies: any = [];
  private title: string;
  results: Object;
 
  searchMovie(title: String){
    this.dataService.searchMovieByTitle(title).subscribe(data => this.movies = data);
    console.log(this.movies);
  }

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getMovies().subscribe(
      res => this.movies = res);
  }

  checkExist(id){
    this.dataService.getMovies().subscribe(
      res => {
        for(var i=0;i<this.movies.length; i++){
          console.log(this.movies[i].Title);
        }
      })
}

  addMovie(id){
    this.checkExist(id);
    this.movie.Imdbid=id;
    this.dataService.getMovieFromOmdb(id).subscribe(
      res => {
        this.dataService.saveMovie(res,id);
          },
          err => console.error(err)
        )
      }   
    }
