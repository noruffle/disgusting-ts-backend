import { RequestHandler } from 'express';
import {Cat} from '../cat.service';

class CatID {
  
  public getCat: RequestHandler = async (req, res) => {
    try {
      const cat = await Cat.findByIdCat(req)
      
      res.send({ message: 'Found the cat operation was succeessful', cat: [cat] })
    } catch (err) {
      res.send([err])
    }
  }

  public postCat: RequestHandler = async (req, res) => {
    try {
      await Cat.createCat(req, res)

      res.send({ message: 'Create cat operation was succeessful' })
    } catch (err) {
      res.send([err])
    }
  }

  public patchCat: RequestHandler = async (req, res) => {
    try {  
      await Cat.patchCat(req)
      
      res.send({ message: 'Upadate cat operation was succeessful' })
    } catch (err) {
      res.send([err])
    }
  }

  public deleteCat: RequestHandler = async (req, res) => {

    try {
      await Cat.deletCat(req)
      
      res.send({ message: `Delete cat operation was succeessful` })
    } catch (err) {
      res.send([err])
    }
  }
}

export const CatById = new CatID();