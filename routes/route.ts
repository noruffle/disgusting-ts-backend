import { Request, Response } from "express";
import { Auth } from '../controllers/auth/auth.controller';

export class Routes {
  public authController: Auth = new Auth();

  public routes(app: any): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.send({
          message: 'GET request seccessful'
        })
      })
    
    app.route('/login').post(this.authController.login)
    app.route('/registration').post(this.authController.registration)
  }
}