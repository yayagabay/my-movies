import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.movie = {
            ID: 1,
            Title: '',
            Year: 0,
            Runtime: 0,
            Genre: '',
            Director: '',
            Image: ''
        };
        this._url = "/assets/data/movies.json";
        this.API_URI = 'http://localhost:3000/api';
    }
    DataService.prototype.getMovies = function () {
        return this.http.get(this.API_URI + "/movies");
    };
    DataService.prototype.getMovie = function (id) {
        return this.http.get(this.API_URI + "/movies/" + id);
    };
    DataService.prototype.deleteMovie = function (id) {
        return this.http.delete(this.API_URI + "/movies/" + id);
    };
    DataService.prototype.saveMovie = function (movie) {
        // this.http.post(`${this.API_URI}/movies`, movie)
        // .subscribe(
        // res => {
        console.log(movie.Title);
        // this.getMovies();
        // },
        // err => console.error(err)
        // )
        // return "ok";
    };
    // updateMovie(id: string|number, updatedMovie: Movie): Observable<Movie> {
    //   return this.http.put(`${this.API_URI}/movies/${id}`, updatedMovie);
    // }
    DataService.prototype.getMovieFromOmdb = function (id) {
        return this.http.get("http://www.omdbapi.com/?i=" + id + "&apikey=a83332e8");
    };
    DataService.prototype.searchMovieByTitle = function (title) {
        return this.http.get("http://www.omdbapi.com/?s=" + title + "&apikey=a83332e8");
    };
    DataService.prototype.getUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getUser = function (userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    };
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map