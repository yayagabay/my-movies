import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(dataService) {
        this.dataService = dataService;
        this.movies = [];
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MoviesComponent.prototype.getMovies = function () {
        var _this = this;
        this.dataService.getMovies().subscribe(function (res) {
            _this.movies = res;
        }, function (err) { return console.error(err); });
    };
    MoviesComponent.prototype.deleteMovie = function (id) {
        var _this = this;
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
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], MoviesComponent);
    return MoviesComponent;
}());
export { MoviesComponent };
//# sourceMappingURL=movies.component.js.map