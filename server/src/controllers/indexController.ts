import { Request,Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { RSA_NO_PADDING } from 'constants';
import { Resolver } from 'dns';


class IndexController{
    public router: Router = Router();
    
    public index(req: Request,res: Response){

        res.json({text: 'API Is /api/movies'});
       }
    
       public json(req: Request,res: Response){

        let  { id } = req.params;
        res.send(`hello, ${id}!`)
           }
       
    public async checkExist(req: Request, res: Response): Promise<any> {
        let  { id } = req.params;
        res.send(`hello, ${id}!`)
        //     const { id } = req.params;
    //     const movies = await pool.query('SELECT * FROM movies WHERE Idmbid = ?', [id]);
    //     console.log(movies.length);
    //     if (movies.length > 0) {
    //         return res.json(movies[0]);

    //     }
    //     res.status(404).json({ text: "The movie doesn't exits" });
    }
    
}

export const indexController = new IndexController();
export default indexController;