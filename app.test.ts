import Express from "express";
import dotenv from "dotenv";
import BodyParser from "body-parser";
import mongoose from "mongoose";
import { Routes } from "./routes/route"
const db: any = process.env.DATABASE;

class App {

    public app: Express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = Express();
        this.config();
        dotenv.config();
        this.mongoSetup()
        this.routePrv.routes(this.app); 
    }

    private config(): void {
        // support application/json type post data
        this.app.use(Express.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(Express.urlencoded({ extended: false }));
    }
    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(db);    
    }
}

export default new App().app;