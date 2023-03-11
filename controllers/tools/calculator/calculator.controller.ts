import { Request, Response, NextFunction } from 'express';
import {api} from '../../../middleware/api/api';

export default class Calculator {
  // Получить калькулятор
  public async getCalculator(req: Request, res: Response) {
    try {
      res.render('con-calc', {
        title: process.env.TITLE,
      })
    } catch (err) {
      res.send({
        message: 'Error',
        error: `${err}`
      })
    }
  }
  
  // Отправить данные калькулятора для обработки
  public async postCalculator(req: Request, res: Response) {
    try {
      const num1: Number = Number(req.body.num1)
      const num2: Number = Number(req.body.num2)
      const date: string = req.body.dob
      console.log(`First operand: ${num1}\nSecond operand: ${num2}`)
      
      const age: number = api.Birthday(date)
    
      let result = api.calculator(num1, num2)

      res.send({
        operand_1: num1,
        operand_2: num2,
        message: 'Operation was seccessful',
        result: `${result}`,
        dob: `${date}`,
        age: age

      })

    } catch (err) {
      res.send({
        message: 'Operation was failed',
        reason: 'postCalculator error',
        error: `${err}`
      })
    }
  }
}

