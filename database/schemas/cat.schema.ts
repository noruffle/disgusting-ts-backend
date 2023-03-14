import {Schema, model, Document} from 'mongoose';
import {Request, Response} from 'express';
import bcrypt from 'bcrypt';

interface ICat extends Document {
  name?: string;
  email?: string;
  password?: string;
}

const schema = new Schema<ICat>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

class ServiceOfCats {
  
  public cat = model<ICat>('cat', schema)

  async allCats() {
    const catsFounded = this.cat
      .find()
      .exec()

    return catsFounded;
  }
  
  async findByQueryCat(req: Request) {
    const {...query} = req.body;
    const catFounded = await this.cat
      .findOne(query)
      .exec()

    return catFounded;
  }

  async findByIdCat(req: Request) {
    const {id} = req.params;
    const catFounded = await this.cat
      .findById(id)
      .exec()
    
    return catFounded;
  }

  async createCat(req: Request, res: Response) {
    const {email, password} = req.body;
    const newData = {email, password}

      try {
        
        const existingCat = await this.cat.findOne({email})
          
        if (existingCat) {
          return res.send({ message: "Cat with this email already exist"})
        }

        const newCat = await this.cat
          .create(newData)
        
        await newCat
          .save()
        
      } catch (err) {
        res.send([err])
      }
    const createdCat = await this.cat
      .create(newData)

    return createdCat.save();
  }
  
  async patchCat(req: Request) {
    const {id} = req.params;
    const {name, age} = req.body
    const update = {name, age}
    const catUpdated = await this.cat
      .findByIdAndUpdate(id, update)
      .exec()
    
    return catUpdated;
  }
  
  async deletCat(req: Request) {
    const {id} = req.params;
    const catDeleted = await this.cat
      .findByIdAndRemove(id)
      .exec()
      
    return catDeleted;
  }
}

export const Cat = new ServiceOfCats();