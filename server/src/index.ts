import { Application } from 'express';
// import * as express from 'express';
import express = require('express');
// import morgan = require('morgan');
import cors from 'cors';
import morgan from 'morgan';
// import * as cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import moviesRoutes from './routes/moviesRoutes';
import { send } from 'q';
const path = require('path');

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
        
        // this.app.use('/',indexRoutes);
        this.app.use('/',express.static('../dist/uploadtoheroku'))
        this.app.use('/api/movies',moviesRoutes);
    }
    
    start(): void{
        
        this.app.get('/*', function(req,res){
            res.sendFile(path.join('../dist/uploadtoheroku/index.html'));
        })
        this.app.listen(process.env.PORT || 5000), () =>{
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