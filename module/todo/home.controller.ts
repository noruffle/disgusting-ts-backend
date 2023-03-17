import { Request, Response, NextFunction } from 'express';
import config from '../env.config';

export default class Home {
  // Стартовая страница
  public async getHome(req: Request, res: Response) {
    try {
      res.render('home', {
        title: config.TITLE,
      })
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }
}