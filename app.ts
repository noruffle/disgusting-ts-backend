import {Default} from './default';
import express from "express";

class App {

  public app: express.Application = express();

  constructor () {
    
    this.app
    .set("view engine", "ejs")
    .use(express.static(__dirname + "/public"))
    .use(express.urlencoded({extended: true}))
    .use(express.json())

    new Default()
  }
}

export default new App().app;