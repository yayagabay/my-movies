"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexController {
    constructor() {
        this.router = express_1.Router();
    }
    index(req, res) {
        res.json({ text: 'API Is /api/movies' });
    }
    checkExist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            res.send(`hello, ${id}!`);
            //     const { id } = req.params;
            //     const movies = await pool.query('SELECT * FROM movies WHERE Idmbid = ?', [id]);
            //     console.log(movies.length);
            //     if (movies.length > 0) {
            //         return res.json(movies[0]);
            //     }
            //     res.status(404).json({ text: "The movie doesn't exits" });
        });
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController;
