import {HydratedDocument, Schema, model, Model} from 'mongoose';
import { Request } from 'express';

interface ICat {
  name?: string;
  age?: number;
  breed?: string;
}

const schema = new Schema<ICat>({
  name: String,
  age: Number,
  breed: String
})

export const Cat = model<ICat>('Cat', schema)

const catt = new Cat({
  name: 'uwu',
  age: 12,
  breed: 'yea'
})

export class CatsService {

  async create(req: Request) {
    const createdCat = await Cat.create({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed
    })
    return createdCat;
  }

  async findAll() {
    return Cat.find().exec()
  }

  
  async findOne(id: string) {
    
    return Cat.findOne({ _id: id }).exec()
    
  }
  
  ppatch(req: Request, cat: any) {
    const {name, age} = req.body
    if (name && age) {
      cat.name = name
      cat.age = age
    }
  }

  async delete(id: string) {
    const deleteCat = await Cat
     .findByIdAndRemove({ _id: id })
     .exec()
    return deleteCat;
  }
}

