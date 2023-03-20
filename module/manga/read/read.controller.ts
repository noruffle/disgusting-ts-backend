import { Request, Response, NextFunction } from 'express';

export default class Read {
  // Страница для чтения манги
  public async getRead(req: Request, res: Response) {
    try {
      res.render('con-read', {
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