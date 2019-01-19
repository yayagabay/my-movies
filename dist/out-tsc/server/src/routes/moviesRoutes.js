import { Router } from 'express';
import moviesController from '../controllers/moviesController';
var MoviesRoutes = /** @class */ (function () {
    function MoviesRoutes() {
        this.router = Router();
        this.config();
    }
    MoviesRoutes.prototype.config = function () {
        this.router.get('/', moviesController.list);
        this.router.get('/:id', moviesController.getOne);
        this.router.post('/', moviesController.create);
        this.router.put('/:id', moviesController.update);
        this.router.delete('/:id', moviesController.delete);
    };
    return MoviesRoutes;
}());
var moviesRoutes = new MoviesRoutes();
export default moviesRoutes.router;
//# sourceMappingURL=moviesRoutes.js.map