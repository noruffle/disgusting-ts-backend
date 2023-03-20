import { Request, Response, NextFunction } from 'express';

class Home {
  // Стартовая страница
  public async GET(req: Request, res: Response) {
    try {
      res.render('home')
    } catch (err) {
      res.send([err])
    }
  }
}

export const HOME = new Home()