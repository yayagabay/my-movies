import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../models/Movie';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  movie: Movie = {
    Title: '',
    Year: 0,
    Runtime: '',
    Genre: '',
    Director: '',
    Poster: '',
    Imdbid: ''
  };
  ID:String;
  constructor(private dataService: DataService,private router: Router) { 

  }
  log(x){
    console.log(x);
  }

  ngOnInit() {
      this.getMovies();
  }

  getMovies(){
    this.dataService.getMovies().subscribe(
      res => {
        this.movies=res;
      },
      err => console.error(err)
      );
  }

  getMovie(id: String) {
    this.dataService.getMovie(id)
      .subscribe(
        res => {
          console.log(res);
          this.movie =res;
          this.ID=id;
        },
        err => console.error(err)
      )
  }

  updateMovie(movie:Movie) {
    console.log(movie);
    movie.Title=movie.Title.replace(/[^a-zA-Z ]/g, "");
    this.dataService.updateMovie(this.ID, movie)
      .subscribe(
        res => { 
          console.log(res);
          this.getMovies();
          this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }

  deleteMovie(id: string) {
    console.log(id);
    this.dataService.deleteMovie(id)
      .subscribe(
        res => {
          console.log(res);
          this.getMovies();
          this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }

}
