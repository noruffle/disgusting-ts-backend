import { RequestHandler } from 'express';
import {manga} from '../schema/manga.schema';

export default class Manga {

  public ALL: RequestHandler = async (req, res) => {
    try {
      const show = await manga.allManga()

      res.send([show])
    } catch (err) {
      res.send([err])
    }
  }
  // Стартовая страница
  public GET_BY_QUERY: RequestHandler = async (req, res) => {
    try {
      const mangaData = await manga.findByQueryManga(req);

      res.render('con-manga', {
        title: process.env.TITLE,
      })
    } catch (err) {
      res.send([err])
    }
  }

  public POST: RequestHandler = async (req, res) => {
    try {
      await manga.postManga(req);

      res.send({ msg: "manga posted" })
    } catch (err) {
      res.send([err])
    }
  }
}