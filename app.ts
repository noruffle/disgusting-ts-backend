import Database from './database/connect.db';
import Router from './routes/route';
import express from "express";

class App {

  public app: express.Application;

  constructor () {

    this.app = express();
    this.config();
  }
  
  private config (): void {
    
    this.app.prototype.routes
    .set("view engine", "ejs")
    .use(express.static(__dirname + "/public"))
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    
    new Router().routes(this.app)
    new Database()
  }
}

export default new App().app;