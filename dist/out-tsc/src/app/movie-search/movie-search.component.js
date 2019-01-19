import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
var MovieSearchComponent = /** @class */ (function () {
    function MovieSearchComponent(dataService, router, activatedRoute) {
        this.dataService = dataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.movie = {
            ID: 0,
            Title: '',
            Year: 0,
            Runtime: 0,
            Genre: '',
            Director: '',
            Image: ''
        };
        this.movies = [];
    }
    MovieSearchComponent.prototype.searchMovie = function (title) {
        var _this = this;
        this.dataService.searchMovieByTitle(title).subscribe(function (data) { return _this.movies = data; });
        console.log(this.movies);
    };
    MovieSearchComponent.prototype.ngOnInit = function () {
    };
    MovieSearchComponent.prototype.addMovie = function (id) {
        var _this = this;
        this.dataService.getMovieFromOmdb(id).subscribe(function (movie) { return _this.movie = movie; });
        console.log(this.movie);
        // this.dataService.saveMovie(this.movie);
    };
    MovieSearchComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movie-search',
            templateUrl: './movie-search.component.html',
            styleUrls: ['./movie-search.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router, ActivatedRoute])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());
export { MovieSearchComponent };
//# sourceMappingURL=movie-search.component.js.map