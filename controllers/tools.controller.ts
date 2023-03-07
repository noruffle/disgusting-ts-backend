import { Request, Response, NextFunction } from 'express';
import Tool from '../database/models/tools.model';

export class Tools {
  // Получить инструменты
  public async getTools (req: Request, res: Response) {
    try {
      return res.status(200).send({
        status: false,
        message: 'Tools corner',
        data: []
      })
    } catch (err) {
      return res.status(200).send({
        status: false,
        message: `${err}`,
        data: [] 
      })
    }
  }
  // Получить конкретный инструмент
  public async getTool (req: Request, res: Response) {
    try {
      return res.status(200).send({
        status: false,
        message: 'Specific tool corner',
        data: []
      })
    } catch (err) {
      return res.status(200).send({
        status: false,
        message: `${err}`,
        data: [] 
      })
    }
  }
  // Опубликовать инструмент
  public async postTool (req: Request, res: Response) {
    try {
    } catch {
    }
  }
  // Удалить инструмент
  public async deleteTool (req: Request, res: Response) {
    try {
      return res.status(200).send({
        status: false,
        message: 'Tools corner',
        data: []
      })
    } catch (err) {
      return res.status(200).send({
        status: false,
        message: `${err}`,
        data: [] 
      })
    }
  }
}

export const Controller = {
  ['/calc']: {
    get: {
      method: 'GET',
      path: '/calc',
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render('con-calc', {
          title: process.env.TITLE,
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
      
        function calculator(...operands: any) {
          return operands.reduce((a: any, b: any) => a + b, 0);
        }
      
        let result = calculator(num1, num2)
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