import { Request, Response, NextFunction } from 'express';
import User from '../../../database/models/user.model';
const { v4: uuidv4 } = require("uuid");
let users: Array<any> = [];

export default class UserID {
  public async getUser(req: Request, res: Response) {
    const {id} = req.params;
    const foundUser = users.find(
      (user) => user.id === id
    )
    
    res.send([foundUser]);
  }

  public async postUser(req: Request, res: Response) {
    try {

      const data = new User({
        name: req.body.name,
        role: req.body.role,
      });

      const dataSaved = await data.save();

      // const uID = uuidv4();
      // const newUsers = {...newUser, id: uID};
      // users.push(newUsers);

      res.send({
        message: `Added new user`,
        user: {
          name: `${data.name}`,
          role: `${data.role}`,
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
      const foundUser = users.find(
        (user) => user.id === id
      )
      
      const { name, age } = req.body;
      if (name && age) {
        foundUser.name = name
        foundUser.age = age

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
    users = users.filter(
      (user) => user.id !== id
    )

    res.send({
      message: `User with ${id} was deleted succeessfuly`
    })
  }
}