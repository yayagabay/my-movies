import { Router } from 'express';
import moviesController from '../controllers/moviesController';


class MoviesRoutes{

public router: Router = Router();

constructor(){
    this.config();
}

config(): void{
    this.router.get('/', moviesController.list);
    this.router.get('/:id', moviesController.getOne);
    this.router.get('/checkexist/:id', moviesController.checkExist);
    this.router.get('/checktitle/:id', moviesController.checkTitle);
    this.router.post('/', moviesController.create);
    this.router.put('/:id', moviesController.update);
    this.router.delete('/:id', moviesController.delete);
}

}

const moviesRoutes = new MoviesRoutes();
export default moviesRoutes.router;