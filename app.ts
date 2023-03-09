import express from "express";
import Routes from './routes/route';
import Database from './database/connect.db';

class App {

  public app: express.Application;
  public route: Routes = new Routes;
  public database: Database = new Database;

  constructor() {
    this.app = express();
    this.config();
    // auth
    this.route.routes(this.app)
    this.database;
  }
  
  private config(): void {
    
    this.app.set("view engine", "ejs");
    this.app.use(express.static(__dirname + "/public"));
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }
}

export default new App().app;