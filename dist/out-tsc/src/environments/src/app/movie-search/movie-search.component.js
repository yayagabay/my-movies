import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
var MovieSearchComponent = /** @class */ (function () {
    function MovieSearchComponent(dataService, activatedRoute) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.movie = {
            Title: '',
            Year: 1,
            Runtime: '',
            Genre: '',
            Director: '',
            Poster: '',
            Imdbid: ''
        };
        this.movies = [];
    }
    MovieSearchComponent.prototype.searchMovie = function (title) {
        var _this = this;
        this.dataService.searchMovieByTitle(title).subscribe(function (data) { return _this.movies = data; });
        console.log(this.movies);
    };
    MovieSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getMovies().subscribe(function (res) { return _this.movies = res; });
    };
    MovieSearchComponent.prototype.checkExist = function (id) {
        var _this = this;
        this.dataService.getMovies().subscribe(function (res) {
            for (var i = 0; i < _this.movies.length; i++) {
                console.log(_this.movies[i].Title);
            }
        });
    };
    MovieSearchComponent.prototype.addMovie = function (id) {
        var _this = this;
        this.checkExist(id);
        this.movie.Imdbid = id;
        this.dataService.getMovieFromOmdb(id).subscribe(function (res) {
            _this.dataService.saveMovie(res, id);
        }, function (err) { return console.error(err); });
    };
    MovieSearchComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movie-search',
            templateUrl: './movie-search.component.html',
            styleUrls: ['./movie-search.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());
export { MovieSearchComponent };
//# sourceMappingURL=movie-search.component.js.map