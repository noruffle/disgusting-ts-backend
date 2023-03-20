import {RequestHandler} from 'express';
import {CatById} from './cat.id.controller';
import {Cat} from '../cat.service';

export default class Cats {
  public ID = CatById;

  public ALL: RequestHandler = async (req, res) => {

    try {
      const catsFounded = await Cat.allCats()

      res.send({ message: 'Found all cats operation was succeessful', cat: [catsFounded] })
    } catch (err) {
      res.send([err])
    }
  }
}