"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = __importDefault(require("../controllers/moviesController"));
class MoviesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', moviesController_1.default.list);
        this.router.get('/:id', moviesController_1.default.getOne);
        this.router.get('/checkexist/:id', moviesController_1.default.checkExist);
        this.router.get('/checktitle/:id/:id2', moviesController_1.default.checkTitle);
        this.router.post('/', moviesController_1.default.create);
        this.router.put('/:id', moviesController_1.default.update);
        this.router.delete('/:id', moviesController_1.default.delete);
    }
}
const moviesRoutes = new MoviesRoutes();
exports.default = moviesRoutes.router;
