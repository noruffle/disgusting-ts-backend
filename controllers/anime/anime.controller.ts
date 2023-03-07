import { Request, Response, NextFunction } from 'express';
import {animeSchema} from '../../database/models/anime.model';
import Watch from './watch/watch.controller';

export default class Anime {
  public watchAnime: Watch = new Watch();
  // Anime corner
  public async getAnime(req: Request, res: Response) {
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

  public async postAnime(req: Request, res: Response) {
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