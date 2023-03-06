import { Request, Response, NextFunction } from "express";

export const Controller = {
  ["/api"]: {
    get: {
      method: "GET",
      path: "/api",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.json([
          { id: 1, name: "Ruffle" },
          { id: 2, name: "Souffle" },
          { id: 3, name: "Anime" },
          { id: 4, name: "Manga" },
        ]);
      },
      /* config End */
    },
  },
};
