import express from "express";
import { Tools } from "../controllers/tools.controller";
import { Home } from '../controllers/home.controller';
import Anime from '../controllers/anime/anime.controller';
//import Manga from '../controllers/manga/manga.controller';

export class Routes {
  public toolsController: Tools = new Tools();
  public homeController: Home = new Home();
  public animeController: Anime = new Anime();

  public routes(app: express.Application): void {
    app.route('/')
      .get(this.homeController.getHome)

    // Anime corner
    app.route('/anime')
      .get(this.animeController.getAnime)
      .post(this.animeController.postAnime)
    
    // Tools corner
    app.route('/tools')
      .get(this.toolsController.getTool)
      .post(this.toolsController.postTool)

    app.route('/calc')
      .get(this.toolsController.calculator.getCalculator)
      .post(this.toolsController.calculator.postCalculator)
  }
}