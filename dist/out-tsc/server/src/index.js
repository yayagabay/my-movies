// import morgan = require('morgan');
import cors from 'cors';
import morgan from 'morgan';
import moviesRoutes from './routes/moviesRoutes';
var path = require('path');
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        // this.app.use('/',indexRoutes);
        this.app.use('/', express.static('../dist/uploadtoheroku'));
        this.app.use('/api/movies', moviesRoutes);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.get('/*', function (req, res) {
            res.sendFile(path.join('../dist/uploadtoheroku/index.html'));
        });
        this.app.listen(process.env.PORT || 5000), function () {
            console.log('Server on Port', _this.app.get('port'));
        };
        // this.app.set('port', (process.env.PORT || 5000));
        // //For avoidong Heroku $PORT error
        // this.app.get('/', function(request, response) {
        // var result = 'App is running'
        // response.send(result);
        // }).listen(this.app.get('port'), function() {
        // console.log('App is running, server is listening on port ', this.app.get('port'));
        // });
    };
    return Server;
}());
var server = new Server();
server.start();
//# sourceMappingURL=index.js.map