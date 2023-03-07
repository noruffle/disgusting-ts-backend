import express from "express";
import * as dotenv from 'dotenv';
import {Routes} from './routes/route';

class App {

  public app: express.Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    dotenv.config();
    this.route.routes(this.app)
  }

  private config(): void {

    this.app.set("view engine", "ejs");
    this.app.use(express.static(__dirname + "/public"));
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }
}

export default new App().app;