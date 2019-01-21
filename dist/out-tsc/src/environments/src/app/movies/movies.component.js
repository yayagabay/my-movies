import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.movies = [];
        this.movie = {
            Title: '',
            Year: 0,
            Runtime: '',
            Genre: '',
            Director: '',
            Poster: '',
            Imdbid: ''
        };
    }
    MoviesComponent.prototype.log = function (x) {
        console.log(x);
    };
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MoviesComponent.prototype.getMovies = function () {
        var _this = this;
        this.dataService.getMovies().subscribe(function (res) {
            _this.movies = res;
        }, function (err) { return console.error(err); });
    };
    MoviesComponent.prototype.getMovie = function (id) {
        var _this = this;
        this.dataService.getMovie(id)
            .subscribe(function (res) {
            console.log(res);
            _this.movie = res;
            _this.ID = id;
        }, function (err) { return console.error(err); });
    };
    MoviesComponent.prototype.updateMovie = function (movie) {
        var _this = this;
        console.log(movie);
        this.dataService.updateMovie(this.ID, movie)
            .subscribe(function (res) {
            console.log(res);
            _this.getMovies();
            _this.router.navigate(['/home']);
        }, function (err) { return console.error(err); });
    };
    MoviesComponent.prototype.deleteMovie = function (id) {
        var _this = this;
        console.log(id);
        this.dataService.deleteMovie(id)
            .subscribe(function (res) {
            console.log(res);
            _this.getMovies();
        }, function (err) { return console.error(err); });
    };
    MoviesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movies',
            templateUrl: './movies.component.html',
            styleUrls: ['./movies.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], MoviesComponent);
    return MoviesComponent;
}());
export { MoviesComponent };
//# sourceMappingURL=movies.component.js.map