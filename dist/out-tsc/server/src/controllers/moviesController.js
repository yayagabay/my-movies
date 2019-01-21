import * as tslib_1 from "tslib";
import pool from '../database';
var MoviesController = /** @class */ (function () {
    function MoviesController() {
    }
    MoviesController.prototype.list = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var movies;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pool.query('SELECT * FROM movies')];
                    case 1:
                        movies = _a.sent();
                        res.json(movies);
                        return [2 /*return*/];
                }
            });
        });
    };
    MoviesController.prototype.getOne = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, movies;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, pool.query('SELECT * FROM movies WHERE ID = ?', [id])];
                    case 1:
                        movies = _a.sent();
                        console.log(movies.length);
                        if (movies.length > 0) {
                            return [2 /*return*/, res.json(movies[0])];
                        }
                        res.status(404).json({ text: "The movie doesn't exits" });
                        return [2 /*return*/];
                }
            });
        });
    };
    MoviesController.prototype.create = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, pool.query('INSERT INTO movies set ?', [req.body])];
                    case 1:
                        result = _a.sent();
                        res.json({ message: 'Movie Saved' });
                        return [2 /*return*/];
                }
            });
        });
    };
    MoviesController.prototype.update = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, oldMovie;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        oldMovie = req.body;
                        return [4 /*yield*/, pool.query('UPDATE movies set ? WHERE ID = ?', [req.body, id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "The movie was Updated" });
                        return [2 /*return*/];
                }
            });
        });
    };
    MoviesController.prototype.delete = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, pool.query('DELETE FROM movies WHERE ID = ?', [id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "The movie was deleted" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return MoviesController;
}());
var moviesController = new MoviesController;
export default moviesController;
//# sourceMappingURL=moviesController.js.map