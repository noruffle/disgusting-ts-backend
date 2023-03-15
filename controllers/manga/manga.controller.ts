import { RequestHandler } from 'express';
import Read from './read/read.controller';
import {manga} from '../../database/schemas/manga.schema';

export default class Manga {
  public readManga: Read = new Read();

  public allManga: RequestHandler = async (req, res) => {
    try {
      const show = await manga.allManga()

      res.send(show)
    } catch (err) {
      res.send([err])
    }
  }
  // Стартовая страница
  public getByQueryManga: RequestHandler = async (req, res) => {
    try {
      const mangaData = await manga.findByQueryManga(req);

      res.render('con-manga', {
        title: process.env.TITLE,
      })
    } catch (err) {
      res.send([err])
    }
  }

  public postManga: RequestHandler = async (req, res) => {
    try {
      await manga.postManga(req);

      res.send({ msg: "manga posted" })
    } catch (err) {
      res.send([err])
    }
  }
}