import express, { Request, Response } from "express";
import { Tools } from "../controllers/tools.controller";
import { Calculator } from "../controllers/tools/calculator.controller";
import { Home } from '../controllers/home.controller';

export class Routes {
  public toolsController: Tools = new Tools();
  public calcController: Calculator = new Calculator();
  public homeController: Home = new Home();

  public routes(app: express.Application): void {
    app.route('/')
      .get(this.homeController.getHome)
    
    // Tools corner
    app.route('/tools')
      .get(this.toolsController.getTool)
      .post(this.toolsController.postTool)

    app.route('/calc')
      .get(this.calcController.getCalculator)
      .post(this.calcController.postCalculator)
  }
}