import { Request, Response, NextFunction } from 'express';
import UserID from './usersByID/users.id.controller';

export default class Users {
  public UserByID: UserID = new UserID();

  public async getUsers(req: Request, res: Response) {
    try {
      res.send({
        message: 'Seccess'
      })
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }
}