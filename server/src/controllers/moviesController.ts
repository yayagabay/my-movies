import { Request, Response } from 'express';


import pool from '../database';

class MoviesController {

    public async list(req: Request, res: Response): Promise<void> {
        const movies = await pool.query('SELECT * FROM movies');
        res.json(movies);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const movies = await pool.query('SELECT * FROM movies WHERE ID = ?', [id]);
        console.log(movies.length);
        if (movies.length > 0) {
            return res.json(movies[0]);
        }
        res.status(404).json({ text: "The movie doesn't exits" });
    }


    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        const result = await pool.query('INSERT INTO movies set ?', [req.body]);
        res.json({ message: 'Movie Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldMovie = req.body;
        await pool.query('UPDATE movies set ? WHERE ID = ?', [req.body, id]);
        res.json({ message: "The movie was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM movies WHERE Imdbid = ?', [id]);
        res.json({ message: "The movie was deleted" });
    }
}

const moviesController = new MoviesController;
export default moviesController;