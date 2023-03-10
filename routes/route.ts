import { Application } from 'express';
import Pathes from './path';

export default class Router {

  private path = new Pathes();

  public routes(app: Application): void {
    
    app.route('/')
      .get(this.path.homeController.getHome)

    // APIs
    app.route('/api')
      .get(this.path.APIsController.getAPI)

    // Anime corner
    app.route('/anime')
      .get(this.path.animeController.getAnime)
      .post(this.path.animeController.postAnime)

    app.route('/anime/watch')
      .get(this.path.animeController.watchAnime.getWatch)

    // Manga corner
    app.route('/manga')
      .get(this.path.mangaController.getManga)
      .post(this.path.mangaController.postManga)

    app.route('/manga/read')
      .get(this.path.mangaController.readManga.getRead)
    
    // Tools corner
    app.route('/tools')
      .get(this.path.toolsController.getTool)
      .post(this.path.toolsController.postTool)

    app.route('/tools/calc')
      .get(this.path.toolsController.calculator.getCalculator)
      .post(this.path.toolsController.calculator.postCalculator)

    // Users
    app.route('/users')
      .get(this.path.usersController.getUsers)

    app.route('/users/:id')
      .get(this.path.usersController.UserByID.getUser)
      .post(this.path.usersController.UserByID.postUser)
      .patch(this.path.usersController.UserByID.patchUser)
      .delete(this.path.usersController.UserByID.deleteUser)

    // Downloads
    app.route('/downloads')
      .get(this.path.downloadsController.getDownloads)

    // Errors
    app.use(this.path.errorsController[404])
    app.use(this.path.errorsController[500])
  }
}
