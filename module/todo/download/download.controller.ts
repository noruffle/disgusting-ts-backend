import { Request, Response, NextFunction } from "express";

export default class Downloads {
  // Страница для просмотра аниме
  public async getDownloads(req: Request, res: Response) {
    try {
      res.send({
        message: 'Downloads route was successful'
      })
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }
}