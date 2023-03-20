import { Request, Response, NextFunction } from 'express';
import {animeSchema} from '../schema/anime.model';

class Anime {

  public async GET(req: Request, res: Response) {
    try {
      res.render('con-anime', {
        title: process.env.TITLE,
      })
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }

  public async POST(req: Request, res: Response) {
    try {
      /* Output data of POST-req: Requestuest */
      console.log(req.body);
      /* All properties */
      const data = new animeSchema({
        title: req.body.title,
        japantitle: req.body.japantitle,
        poster: req.body.poster,
        status: req.body.status,
        premiered: req.body.premiered,
        studio: req.body.studio,
        description: req.body.description,
        genres: {
          genre: req.body.genre,
        },
      });
      
    } catch (err) {
      res.send({
        message: 'error postAnime'
      })
    }
  }
}

export const ANIME = new Anime()