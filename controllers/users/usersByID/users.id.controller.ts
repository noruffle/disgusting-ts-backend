import { Request, Response, NextFunction } from 'express';
import User from '../../../database/models/user.model';

export default class UserID {
  public async getUser(req: Request, res: Response) {
    const {id} = req.params;
    const foundUser: any = User.find(
      (user: any) => user.id === id
    )
    
    res.send([foundUser]);
  }

  public async postUser(req: Request, res: Response) {
    try {

      const data = new User({
        important: {
          email: req.body.email,
          password: req.body.password
        }
      });

      const registered = await data.save();

      res.send({
        message: `Added new user`,
        user: {
          name: `${data.important.email}`,
          role: `${data.important.password}`,
        }
      })

    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }

  public async patchUser (req: Request, res: Response) {
    try {  
      const {id} = req.params;
      const foundUser = User.find(
        (user: any) => user.id === id
      )
      
      const { name, age } = req.body;
      if (name && age) {
        //foundUser. = name
        //foundUser.age = age                            !!!!!

        res.send({
          message: `User with ${id} was updated`,
          update: {
            name: name,
            age: age
          }
        })
      }

    } catch (err) {
      res.send(err)
    }
  }

  public async deleteUser (req: Request, res: Response) {
    const {id} = req.params;
    // const users = User.filter(
    //   (user: any) => user.id !== id
    // )

    res.send({
      message: `User with ${id} was deleted succeessfuly`
    })
  }
}