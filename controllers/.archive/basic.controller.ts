import { Request, Response, NextFunction } from 'express';
import { animeSchema } from "../../database/models/anime.model";

export const Controller = {
  ["/"]: {
    get: {
      method: "GET",
      path: "/",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render("home", {
          title: process.env.TITLE,
        });
      },
    },

    post: {
      method: "POST",
      path: "/",
      callback: (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body.title);
      },
    },

    put: {
      method: "PUT",
      path: "/",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    delete: {
      method: "DELETE",
      path: "/",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },
  },

  ["/anime"]: {
    get: {
      method: "GET",
      path: "/anime",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render("con-anime", {
          title: process.env.TITLE,
        });
      },
    },

    post: {
      method: "POST",
      path: "/anime",
      callback: (req: Request, res: Response, next: NextFunction) => {
        /* Output data of POST-req: Requestuest */
        console.log(req.body);
        /* All properties */
        const data = {
          title: req.body.title,
          japantitle: req.body.japantitle,
          poster: req.body.poster,
          status: req.body.status,
          premiered: req.body.premiered,
          studio: req.body.studio,
          description: req.body.description,
          genres: {
            genre: req.body.genre,
          },
        };

        const add = new animeSchema({ data });
      },
    },

    put: {
      method: "PUT",
      path: "/anime",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/anime",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    delete: {
      method: "DELETE",
      path: "/anime",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },
  },

  ["/anime/watch"]: {
    get: {
      method: "GET",
      path: "/anime/watch",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render("con-watch", {
          title: process.env.TITLE,
        });
      },
    },

    post: {
      method: "POST",
      path: "/anime/watch",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    put: {
      method: "PUT",
      path: "/anime/watch",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/anime/watch",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    delete: {
      method: "DELETE",
      path: "/anime/watch",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },
  },

  ["/manga"]: {
    get: {
      method: "GET",
      path: "/manga",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render("con-manga", {
          title: process.env.TITLE,
        });
      },
    },

    post: {
      method: "POST",
      path: "/manga",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    put: {
      method: "PUT",
      path: "/manga",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/manga",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    delete: {
      method: "DELETE",
      path: "/manga",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },
  },

  ["/manga/read"]: {
    get: {
      method: "GET",
      path: "/manga/read",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.render("con-read", {
          title: process.env.TITLE,
        });
      },
    },

    post: {
      method: "POST",
      path: "/manga/read",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    put: {
      method: "PUT",
      path: "/manga/read",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/manga/read",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    delete: {
      method: "DELETE",
      path: "/manga/read",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },
  },
};
