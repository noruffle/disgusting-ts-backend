import Routing from './src/route';
import {DEFAULT} from './env.cfg';
import mongoose from 'mongoose';
import express from "express";

class App {

  public app: express.Application = express();
  public routing: Routing = new Routing();

  constructor () {

    this.app
    .set("view engine", "ejs")
    .use(express.static(__dirname + "/public"))
    .use(express.urlencoded({extended: true}))
    .use(express.json())

    this.db()

    this.routing
    .routes(this.app)
  }

  private async db() {

    mongoose.set('strictQuery', true)
    
    await mongoose
    .connect(DEFAULT.DB)
      .then(DEFAULT.DB_LOG)
      .catch(DEFAULT.ERR_LOG)
  }
}

export default new App().app;