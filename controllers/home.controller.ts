import { Request, Response, NextFunction } from 'express';
import Tool from '../database/models/tools.model';

export class Home {
  // Стартовая страница
  public async getHome(req: Request, res: Response) {
    try {
      res.render('home', {
        title: process.env.TITLE,
      })
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }
}