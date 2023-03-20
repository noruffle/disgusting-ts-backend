import {RequestHandler} from 'express';
import {CatById} from './cat.id.controller';
import {Cat} from '../cat.service';

class CatS {
  public catById = CatById;

  public getCats: RequestHandler = async (req, res) => {

    try {
      const catsFounded = await Cat.allCats()

      res.send({ message: 'Found all cats operation was succeessful', cat: [catsFounded] })
    } catch (err) {
      res.send([err])
    }
  }
}

export const Cats = new CatS();