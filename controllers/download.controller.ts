import { Request, Response, NextFunction } from "express";

export const Controller = {
  ["/download"]: {
    get: {
      method: "GET",
      path: "/download",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render("home", {
          title: "Download",
        });
      },
    },

    post: {
      method: "POST",
      path: "/download",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    put: {
      method: "PUT",
      path: "/download",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/download",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    delete: {
      method: "DELETE",
      path: "/download",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },
  },
};
