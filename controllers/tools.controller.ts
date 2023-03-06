import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

export const Controller = {
  ['/calc']: {
    get: {
      method: 'GET',
      path: '/calc',
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render('con-calc', {
          title: config.title + 'Calculator',
        })
      }
    },

    post: {
      method: 'POST',
      path: '/calc',
      callback: (req: Request, res: Response, next: NextFunction) => {
        const num1 = Number(req.body.num1)
        const num2 = Number(req.body.num2)
        console.log(`First operand: ${num1}\nSecond operand: ${num2}`)
      
        function Calculator(...operands: any) {
          return operands.reduce((a: any, b: any) => a + b, 0);
        }
      
        let result = Calculator(num1, num2)
        console.log(`Result: ${result}`)
      
        res.write(`\nResult: ${result}`)
        res.send()
      }
    },

    put: {
      method: 'PUT',
      path: '/calc',
      callback: (req: Request, res: Response, next: NextFunction) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/calc',
      callback: (req: Request, res: Response, next: NextFunction) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/calc',
      callback: (req: Request, res: Response, next: NextFunction) => {

      }
    }
  },
  
}