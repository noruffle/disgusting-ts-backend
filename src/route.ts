import Controllers from './controllers';
import express from 'express';

export default class Routing {

  private controller: Controllers = new Controllers();

  public routes(app: express.Application): void {

    app.route('/')
      .get(this.controller.home.GET)

    // Anime corner
    app.route('/anime')
      .get(this.controller.anime.GET)
      .post(this.controller.anime.POST)

    // Manga corner
    app.route('/manga')
      .get(this.controller.manga.ALL)
      .post(this.controller.manga.POST)

    app.route('/cats')
      .get(this.controller.cats.ALL)


    app.route('/cats/:id')
      .get(this.controller.cats.ID.GET)
      .patch(this.controller.cats.ID.PATCH)
      .delete(this.controller.cats.ID.DELETE)

    // Errors
    app.use(this.controller.errors[404])
    app.use(this.controller.errors[500])
  }
}