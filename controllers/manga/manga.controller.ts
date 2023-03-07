import { Request, Response, NextFunction } from 'express';
import Read from './read/read.controller';

export default class Manga {
  public readManga: Read = new Read();

  // Стартовая страница
  public async getManga(req: Request, res: Response) {
    try {
      res.render('con-manga', {
        title: process.env.TITLE,
      })
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }

  public async postManga(req: Request, res: Response) {
    try {
      res.send({
        message: "postManga request seccessful"
      })
    } catch (err) {
      res.send({      
        message: 'Error',
        error: `${err}`
      })
    }
  }
}