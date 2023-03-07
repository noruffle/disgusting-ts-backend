import { Request, Response, NextFunction } from 'express';
import { calculator } from '../../../middleware/api/api-calc';

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
      console.log(`First operand: ${num1}\nSecond operand: ${num2}`)
    
      let result = calculator(num1, num2)

      res.send({
        operand_1: num1,
        operand_2: num2,
        message: 'Operation was seccessful',
        result: `${result}`
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

