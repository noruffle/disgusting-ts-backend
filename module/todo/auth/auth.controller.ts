import { Request, Response } from 'express';

export class Auth {
    
    public async login(req: Request, res: Response) {
      try {

        const body = req.body;
        



      } catch (err) {
        res.send({
          err: err
        })
      }
    }
}