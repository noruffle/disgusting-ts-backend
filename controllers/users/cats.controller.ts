import {RequestHandler} from 'express';
import {CatById} from './catByID/cat.id.controller';
import {Cat} from '../../database/schemas/cat.schema';

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