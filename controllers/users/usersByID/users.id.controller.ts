import { RequestHandler } from 'express';
import User from '../../../database/models/user.model';

export default class UserID {
  public getUser: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const foundUser: any = User.find(
      (user: any) => user.id === id
    )
    
    res.send([foundUser]);
  }

  public postUser: RequestHandler = async (req, res) => {
    try {

      const data = new User({
        important: {
          email: req.body.email,
          password: req.body.password
        }
      });


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

  public deleteUser: RequestHandler = async (req, res) => {
    const {id} = req.params;
    // const users = User.filter(
    //   (user: any) => user.id !== id
    // )

    res.send({
      message: `User with ${id} was deleted succeessfuly`
    })
  }
}