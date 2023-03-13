import { RequestHandler } from 'express';
import User from '../../../database/models/user.model';
import {Cat, CatsService} from '../../../database/test/schemas/cat.schema';

export default class UserID {
  public getUser: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const cat = await new CatsService().findOne(id)
    
    res.send([cat]);
  }

  public postUser: RequestHandler = async (req, res) => {
    try {

      const cat = await new CatsService().create(req)
      cat.save()
      
      console.log(
        cat.name

      )

      const data = new User({
        important: {
          email: req.body.email,
          password: req.body.password
        }
      });

      res.redirect('home')
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }

  public patchUser: RequestHandler = async (req, res) => {
    try {  
      const {id} = req.params;
      const {name, age} = req.body
      const update = {name, age}
      const cat = await Cat.findByIdAndUpdate(id, update)
      
      res.send({message: `User with ${id} was updated`})
      
    } catch (err) {
      res.send(err)
    }
  }

  public deleteUser: RequestHandler = async (req, res) => {
    const {id} = req.params;
    
    await new CatsService().delete(id)

    res.send({
      message: `User with ${id} was deleted succeessfuly`
    })
  }
}