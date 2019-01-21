import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var DataService = /** @class */ (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
        this.movie = {
            Title: '',
            Year: 0,
            Runtime: '',
            Genre: '',
            Director: '',
            Poster: '',
            Imdbid: ''
        };
        // private _url: string = "/assets/data/movies.json";
        this.API_URI = 'http://localhost:3000/api';
    }
    DataService.prototype.getMovies = function () {
        return this.http.get(this.API_URI + "/movies");
    };
    DataService.prototype.getMovie = function (id) {
        return this.http.get(this.API_URI + "/movies/" + id);
    };
    DataService.prototype.checkExist = function (id) {
        return this.http.get(this.API_URI + "/movies/check/" + id);
    };
    DataService.prototype.deleteMovie = function (id) {
        return this.http.delete(this.API_URI + "/movies/" + id);
    };
    DataService.prototype.saveMovie = function (string, id) {
        var _this = this;
        this.checkExist(id);
        var m = JSON.stringify(string);
        console.log(string);
        this.movie.Title = string.Title;
        this.movie.Year = string.Year;
        this.movie.Runtime = string.Runtime;
        this.movie.Genre = string.Genre;
        this.movie.Director = string.Director;
        this.movie.Poster = string.Poster;
        this.movie.Imdbid = id;
        console.log(this.movie);
        this.http.post(this.API_URI + "/movies", this.movie)
            .subscribe(function (res) {
            console.log(res);
            _this.getMovies();
            _this.router.navigate(['/home']);
        }, function (err) { return console.error(err); });
    };
    DataService.prototype.updateMovie = function (id, updatedMovie) {
        return this.http.put(this.API_URI + "/movies/" + id, updatedMovie);
    };
    DataService.prototype.getMovieFromOmdb = function (id) {
        return this.http.get("http://www.omdbapi.com/?i=" + id + "&apikey=a83332e8");
    };
    DataService.prototype.searchMovieByTitle = function (title) {
        return this.http.get("http://www.omdbapi.com/?s=" + title + "&apikey=a83332e8");
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map