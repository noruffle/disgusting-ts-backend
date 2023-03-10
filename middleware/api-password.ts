import {Request, Response} from 'express';

class Iron {
  Wall(req: Request, res: Response) {
    try {
      const pass = '123'
      const query = req.query.password

      if (query && (query === pass)) {
        res.send({
          message: 'Login successful'
        })
      }
      
    } catch (error) {
      
      res.send({
        message: "Login failed"
      })
    }
  }
}

export default new Iron().Wall;