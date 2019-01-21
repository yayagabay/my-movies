"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as express from 'express';
const express = require("express");
// import morgan = require('morgan');
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const moviesRoutes_1 = __importDefault(require("./routes/moviesRoutes"));
const path = require('path');
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes() {
        // this.app.use('/',indexRoutes);
        this.app.use(express.static('/app/dist/uploadtoheroku'));
        this.app.use('/api/movies', moviesRoutes_1.default);
    }
    start() {
        this.app.get('/*', function (req, res) {
            res.sendFile(path.join('/app/dist/uploadtoheroku/index.html'));
        });
        this.app.listen(process.env.PORT || 5000), () => {
            console.log('Server on Port', this.app.get('port'));
        };
        // this.app.set('port', (process.env.PORT || 5000));
        // //For avoidong Heroku $PORT error
        // this.app.get('/', function(request, response) {
        // var result = 'App is running'
        // response.send(result);
        // }).listen(this.app.get('port'), function() {
        // console.log('App is running, server is listening on port ', this.app.get('port'));
        // });
    }
}
const server = new Server();
server.start();
