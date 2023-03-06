import { Request, Response, NextFunction } from "express";

export const Controller = {
  ["404"]: {
    type: "404",
    callback: (req: Request, res: Response, next: NextFunction) => {
      res.status(404);
      res.render("err-404", {
        title: "Error 404",
      });
    },
  },

  ["500"]: {
    type: "500",
    callback: (req: Request, res: Response, next: NextFunction) => {
      res.status(500);
      res.render("err-500", {
        title: "Error 500",
      });
    },
  },
};
