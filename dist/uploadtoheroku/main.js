(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-search/movie-search.component */ "./src/app/movie-search/movie-search.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");






var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]
    },
    {
        path: 'search',
        component: _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_4__["MovieSearchComponent"]
    },
    {
        path: 'todo',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"], _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_4__["MovieSearchComponent"]];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-sidebar></app-sidebar>\n\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyMovies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-search/movie-search.component */ "./src/app/movie-search/movie-search.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_10__["MoviesComponent"],
                _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_11__["MovieSearchComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_15__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"].forRoot()
            ],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




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
        this.API_URI = '/api';
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
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/movie-search/movie-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\nSearch New Movie\n</h2>\n\n<form>\n  <input name=\"title\" [(ngModel)]=\"title\" placeholder=\"Batman\" class=\"form-control\"/>\n  <button type=\"submit\" style=\"margin-top:10px;\" (click)=\"searchMovie(title)\" \n  class=\"btn btn-success btn-block\">Search</button>\n</form>\n\n<div style=\"margin-top:10px;\" class=\"col-md-3\" *ngFor=\"let movie of movies.Search\">\n  <div class=\"card text-center\">\n<div>\n  <img  [src] class=\"card-img-top\" [src]=\"movie.Poster\">\n    <div class=\"centered\"> {{movie.Title}}, {{movie.Year}} </div>\n</div>\n    <div class=\"card-body\">\n      <a style=\"color:white;\" (click)=\"addMovie(movie.imdbID)\" class=\"btn btn-info btn-block\">\n        ADD TO MY MOVIES\n      </a>\n    </div>\n  </div>\n</div> \n\n"

/***/ }),

/***/ "./src/app/movie-search/movie-search.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLXNlYXJjaC9tb3ZpZS1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/movie-search/movie-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.ts ***!
  \********************************************************/
/*! exports provided: MovieSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSearchComponent", function() { return MovieSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




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
    MovieSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-search',
            template: __webpack_require__(/*! ./movie-search.component.html */ "./src/app/movie-search/movie-search.component.html"),
            styles: [__webpack_require__(/*! ./movie-search.component.scss */ "./src/app/movie-search/movie-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n#infoMiniTitle{\ntext-align:center;\n}\n</style>\n<h2>\n    My Movies\n  </h2>\n\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Movie</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n              <input type=\"text\" required [(ngModel)]=\"movie.Title\" name=\"Title\" #Title=\"ngModel\" (change)=log(Title) placeholder=\"Title\" class=\"form-control\" autofocus>\n              \n              <div class=\"form-group\">\n                <input type=\"number\" [(ngModel)]=\"movie.Year\" name=\"Year\" placeholder=\"Year\" class=\"form-control\" autofocus>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"movie.Runtime\" name=\"Runtime\"  placeholder=\"Runtime\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"movie.Genre\" name=\"Genre\"  placeholder=\"Genre\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"movie.Director\" name=\"Director\"  placeholder=\"Director\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"url\" [(ngModel)]=\"movie.Poster\" name=\"image URL\"  placeholder=\"Poster\" class=\"form-control\">\n              </div>\n            </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"submit\" (click)=\"updateMovie(movie)\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Save changes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n \n\n\n\n\n\n\n    <div class=\"modal fade\" id=\"movieInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"exampleModalLabel\">{{movie.Title}}, <h5>{{movie.Year}}</h5></h4> \n              <p id=\"infoMiniTitle\"><span style=\"text-decoration: underline;\">Runtime:</span><br/>{{movie.Runtime}}</p>\n              <p id=\"infoMiniTitle\"><span style=\"text-decoration: underline;\">Genre:</span><br/>{{movie.Genre}}</p>\n              <p id=\"infoMiniTitle\"><span style=\"text-decoration: underline;\">Director:</span><br/>{{movie.Director}}</p>\n\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"modal fade\" id=\"deleteMovie\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete Movie</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                Are you sure?\n              </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n                  <button type=\"submit\" (click)=\"deleteMovie(movie.ID)\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      \n    <div style=\"margin-top:10px;\" class=\"col-md-3\" *ngFor=\"let movie of movies\">\n        <div class=\"card text-center\">\n      <div>\n        <img  [src] class=\"card-img-top\" [src]=\"movie.Poster\">\n          <div class=\"centered\"> {{movie.Title}}, {{movie.Year}} </div>\n      </div>\n          <div class=\"card-body\">\n              <a style=\"color:white;\" (click)=\"getMovie(movie.ID)\" class=\"btn btn-info btn-block\" data-toggle=\"modal\" data-target=\"#movieInfo\">\n                  INFO\n                </a>\n            <a style=\"color:white;\" (click)=\"getMovie(movie.ID)\" class=\"btn btn-warning btn-block\" data-toggle=\"modal\" data-target=\"#myModal\">\n              EDIT MOVIE\n            </a>\n\n              <a style=\"color:white;\" (click)=\"getMovie(movie.ID)\" class=\"btn btn-danger btn-block\" data-toggle=\"modal\" data-target=\"#deleteMovie\">\n                  DELETE\n                </a>\n          </div>\n        </div>\n      </div> "

/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




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
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/movies/movies.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n      <li>\n        <a routerLink=\"home\" routerLinkActive=\"activated\">\n          <i class=\"material-icons\">local_movies</i>\n        </a>\n      </li>\n      <li>\n          <a routerLink=\"search\" routerLinkActive=\"activated\">\n            <i class=\"material-icons\">search</i>\n          </a>\n      </li>\n      <li>\n          <a routerLink=\"todo\" routerLinkActive=\"activated\">\n              <i class=\"material-icons\">done_all</i>\n          </a>\n      </li>\n    </ul>\n  </nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #2D2E2E;\n  height: 100%; }\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  nav ul li a {\n      color: #fff;\n      padding: 20px;\n      display: block; }\n  nav ul li .activated {\n      background-color: #00a8ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9DOlxcVXNlcnNcXHlhaXJnXFxEZXNrdG9wXFxjbWRlcl9taW5pXFxjb2RlXFxteS1tb3ZpZXMvc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBbUI7RUFDbkIsYUFBWSxFQXFCZjtFQXZCRDtJQUtRLHNCQUFxQjtJQUNyQixXQUFVO0lBQ1YsVUFBUyxFQWNaO0VBckJMO01BWWdCLFlBQVc7TUFDWCxjQUFhO01BQ2IsZUFBYyxFQUNqQjtFQWZiO01Ba0JnQiwwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZDogIzJEMkUyRTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWN0aXZhdGVkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE4ZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>TODO LIST:</h1>\n<p>\n\n  1.Check if there is an existing movie like the one i want to add.\n  <br/>\n  2.Change the all names of the movies to \"This Is A Movie\", no !@#$.\n  <br/>\n  3.New Movie\n  <br/>\n  4.Heroku\n  <br/>\n  5.Design\n  <br/>\n  7.Elef\n  <br/>\n  8.Mobile.\n  <br/>\n  9.Users\n  <br/>\n  10.Cant Add a movie if it does not have the requirements (Director,Runtime,Genre...)\n</p>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.scss":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/todo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yairg\Desktop\cmder_mini\code\my-movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map