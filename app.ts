/* import { download } from './routes/route/download.route';
import { basic } from './routes/route/basic.route';
import { error } from './routes/route/error.route';
import { tools } from './routes/route/tools.route';
import { users } from './routes/route/users.route';
import { api } from './routes/route/api.route';
 */
import BodyParser from 'body-parser';
import mongoose from "mongoose";
import express from "express";
import * as dotenv from 'dotenv';
import {Routes} from './routes/route';

//const db: any = process.env.DATABASE;

// const app = express();

// Engine
// mongoose.set("strictQuery", false);
// app.set("view engine", "ejs");

// Static
// app.use(express.static(__dirname + "/public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Routes
// app.use([basic, tools, api, users, download, error]);

class App {

  public app: express.Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    dotenv.config();
    // this.ConnectDB();
    this.route.routes(this.app)
  }

  private config(): void {
    //  Static
    this.app.set("view engine", "ejs");
    this.app.use(express.static(__dirname + "/public"));
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  /* private ConnectDB(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DATABASE);

  } */
}

export default new App().app;