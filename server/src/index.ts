import { Application } from 'express';
import * as express from 'express';

import * as morgan from 'morgan';
import * as cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import moviesRoutes from './routes/moviesRoutes';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();

    }

    config(): void{
        this.app.set('port',process.env.PORT || 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/movies',moviesRoutes);
    }

    start(): void{
        // this.app.listen(process.env.PORT || 5000), () =>{
        //     console.log('Server on Port', this.app.get('port'));
        // };
        var app     = express();
        var express = require('express');
        app.set('port', (process.env.PORT || 5000));
        //For avoidong Heroku $PORT error
        app.get('/', function(request, response) {
        var result = 'App is running'
        response.send(result);
        }).listen(app.get('port'), function() {
        console.log('App is running, server is listening on port ', app.get('port'));
        });



    }

}

const server = new Server();
server.start();