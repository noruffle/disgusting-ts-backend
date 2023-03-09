import { Request, Response, NextFunction } from 'express';
import User from '../../database/models/user.model';
import UserID from './usersByID/users.id.controller';

export default class Users {
  public UserByID: UserID = new UserID();

  public async getUsers(req: Request, res: Response) {
    try {
      const data = await User.find({});
      res.send(data)
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }
}