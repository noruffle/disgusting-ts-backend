import { Request, Response, NextFunction } from "express";

class Errors {
  public ['404'] = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    res.render('err-404', {
      title: 'Error 404'
    })
  }

  public ['500'] = (req: Request, res: Response, next: NextFunction) => {
    res.status(500);
    res.render('err-500', {
      title: 'Error 500'
    })
  }
}

export const ERRORS = new Errors()