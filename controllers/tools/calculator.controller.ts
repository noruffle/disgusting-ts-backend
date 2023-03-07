import { Request, Response, NextFunction } from 'express';


export class Calculator {
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
    } catch (err) {
      res.send({
        message: 'postCalculator error',
        error: `${err}`
      })
    }
  }
}