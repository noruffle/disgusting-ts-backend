import {HOME} from '../src/home/controller/home.controller';
import {ANIME} from '../src/anime/controller/anime.controller';
import {MANGA} from '../src/manga/controller/manga.controller';
import {CATS} from '../src/cats/controller/cats.controller';
import {ERRORS} from '../src/errors/controller/error.controller';

import express from 'express';
import app from '../app';

export function routes(app: express.Application) {

  app.route('/')
    .get(HOME.GET)

  // Anime corner
  app.route('/anime')
    .get(ANIME.GET)
    .post(ANIME.POST)

  // Manga corner
  app.route('/manga')
    .get(MANGA.ALL)
    .post(MANGA.POST)

  app.route('/cats')
    .get(CATS.ALL)
    

  app.route('/cats/:id')
    .get(CATS.ID.GET)
    .patch(CATS.ID.PATCH)
    .delete(CATS.ID.DELETE)

  // Errors
  app.use(ERRORS[404])
  app.use(ERRORS[500])
}

// class Router {

//   constructor() {
//     const app: express.Application = require('../app')
//     this.routes(app)
//   }

//   public 
// }

//export const router = new Router()