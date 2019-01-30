"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MoviesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield database_1.default.query('SELECT * FROM movies');
            if(movies.length>0){
                res.json(movies);
            }else{
                res.status(404).json({ text: "There is no movies, Try again!" });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movies = yield database_1.default.query('SELECT * FROM movies WHERE ID = ?', [id]);
            console.log(movies.length);
            if (movies.length > 0) {
                return res.json(movies[0]);
            }
            res.status(404).json({ text: "The movie doesn't exits" });
        });
    }

    checkExist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movies = yield database_1.default.query('SELECT * FROM movies WHERE Imdbid = ?', [id]);
            console.log(movies.length);
            if (movies.length > 0) {
                res.status(404).json({ text: "The movie exits" });
            }
            res.json({ message: 'good' });
        });
    }

    checkTitle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movies = yield database_1.default.query('SELECT * FROM movies WHERE Title = ?', [id]);
            console.log(movies.length);
            if (movies.length > 0) {
                res.status(404).json({ text: "The movie exits" });
            }
            res.json({ message: 'good' });
        });
    }

    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const result = yield database_1.default.query('INSERT INTO movies set ?', [req.body]);
            res.json({ message: 'Movie Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldMovie = req.body;
            yield database_1.default.query('UPDATE movies set ? WHERE ID = ?', [req.body, id]);
            res.json({ message: "The movie was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM movies WHERE Imdbid = ?', [id]);
            res.json({ message: "The movie was deleted: " + id });
        });
    }
}
const moviesController = new MoviesController;
exports.default = moviesController;
