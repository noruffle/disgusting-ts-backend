import mongoose from 'mongoose';
import express from "express";

import {DEFAULT} from './env.config';

class App {

  public app: express.Application = express();

  constructor () {
    
    this.app
    .set("view engine", "ejs")
    .use(express.static(__dirname + "/public"))
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    
    this.config
    
    this.app.listen(DEFAULT.PORT, DEFAULT.LISTEN)
  }
  
  private async config() {
    
    await mongoose
    .connect(DEFAULT.DB)
      .then(DEFAULT.DB_LOG)
      .catch(DEFAULT.ERR_LOG)
      .finally(DEFAULT.ROUTER)
  }
}

export default new App().app;