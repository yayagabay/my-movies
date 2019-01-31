import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from '../data.service';
import { Movie } from '../models/Movie';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
  errorMsg: any = null;
  showAlert=false;
  
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private router: Router) { }
  
  ngOnInit() {
  }
  


  searchMovie(title: String){
    this.dataService.searchMovieByTitle(title)
    .subscribe(
      res => {this.movies = res});
  }
  

  addMovie(id){  
    this.dataService.checkExist(id).subscribe(
      res => {
      console.log(res)
      },
        err =>{this.errorMsg=err;
          this.showAlert=!this.showAlert;});

        
        this.dataService.getMovieFromOmdb(id).subscribe(
            res => {
             this.dataService.saveMovie(res,id);
        },
        err =>{
          this.errorMsg=err;
        })
      }
      }   
    
