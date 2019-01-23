import { Request,Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { RSA_NO_PADDING } from 'constants';
// import { Resolver } from 'dns';


class IndexController{
    public router: Router = Router();
    
    public index(req: Request,res: Response){

        res.json({text: 'API Is /api/movies'});
       }
    
    }

export const indexController = new IndexController();
export default indexController;