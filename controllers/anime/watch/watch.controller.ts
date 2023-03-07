import { Request, Response, NextFunction } from 'express';

export default class Watch {
  // Страница для просмотра аниме
  public async getWatch(req: Request, res: Response) {
    try {
      res.render('con-watch', {
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