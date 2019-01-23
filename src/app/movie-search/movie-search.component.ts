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
  title: string;
  results: Object;
  public errorMsg;

  searchMovie(title: String){
    this.dataService.searchMovieByTitle(title).subscribe(data => this.movies = data);
    console.log(this.movies);
  }

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.dataService.getMovies().subscribe(
      res => this.movies = res);
  }



  addMovie(id){
    console.log(this.dataService.checkExist(id));

    // this.dataService.getMovieFromOmdb(id).subscribe(
      // res => {
      //   this.dataService.saveMovie(res,id);
      //     }

        // )
      }   
    }
