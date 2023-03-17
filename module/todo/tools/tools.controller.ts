import { Request, Response, NextFunction } from 'express';
import Calculator from './calculator/calculator.controller';

export default class Tools {
  public calculator: Calculator = new Calculator();
  // Получить инструменты
  public async getTools (req: Request, res: Response) {
    try {
      return res.send({
        status: false,
        message: 'Tools corner',
        data: []
      })
    } catch (err) {
      return res.send({
        status: false,
        message: `${err}`,
        data: [] 
      })
    }
  }
  // Получить конкретный инструмент
  public async getTool (req: Request, res: Response) {
    try {
      return res.send({
        status: false,
        message: 'Specific tool corner',
        data: []
      })
    } catch (err) {
      return res.send({
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
      return res.send({
        status: false,
        message: 'Tools corner',
        data: []
      })
    } catch (err) {
      return res.send({
        status: false,
        message: `${err}`,
        data: [] 
      })
    }
  }
}