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
  lastMovie: Movie = {
    Title: '',
    Year: 0,
    Runtime: '',
    Genre: '',
    Director: '',
    Poster: '',
    Imdbid: ''
  };
  ID:string;
  errorMsg: any = [];
  showAlert=false;




  constructor(private dataService: DataService,private router: Router) { 
  }

  ngOnInit() {
      this.getMovies();
  }

  log(x){
    console.log(x);
  }

  getMovies(){
    this.dataService.getMovies().subscribe(
      res => {
        this.movies=res;
      },
      err => {this.errorMsg=err;}
      )
  }

  getMovie(id: string) {
    this.dataService.getMovie(id)
      .subscribe(
        res => {
          console.log(res);
          this.movie =res;
          this.lastMovie=res;
          this.ID=id;
        },
        err => console.error(err)
      )
  }

  updateMovie(movie:Movie) {

    this.dataService.getMovie(movie.Imdbid)
      .subscribe(
        res => {
          this.lastMovie=res;
        },
        err => console.error(err)
      )


      this.dataService.checkTitle(movie.Title,movie.Imdbid).subscribe(
        res => {
        console.log(res);
        console.log(movie);
        movie.Imdbid=this.ID;
        movie.Title=movie.Title.replace(/[^a-zA-Z ]/g, "");
        this.dataService.updateMovie(this.ID, movie)
          .subscribe(
            res => { 
              console.log(res);
              this.getMovies();
              this.router.navigate(['/home']);
            },
            err => {this.errorMsg=err;}
          )
        },
          err =>{this.errorMsg=err;
            this.showAlert=true;});
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
