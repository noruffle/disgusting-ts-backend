import { Request, Response, NextFunction } from "express";

const { v4: uuidv4 } = require("uuid");
let users: Array<any> = [];

export const Controller = {
  ["/users"]: {
    get: {
      method: "GET",
      path: "/users",
      callback: (req: Request, res: Response, next: NextFunction) => {
        res.send(users);
      },
    },

    post: {
      method: "POST",
      path: "/users",
      callback: (req: Request, res: Response, next: NextFunction) => {
        /* Get new User from POST-request */
        const newUser = req.body;

        /* UID */
        const UID = uuidv4();

        /* Add UID to new User */
        const userUID = { ...newUser, id: UID };

        /* Add userUID to DATABASE */
        users.push(userUID);

        res.send(`Added new user ${newUser.name}`);
      },
    },

    put: {
      method: "PUT",
      path: "/users",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/users",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    delete: {
      method: "DELETE",
      path: "/users",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },
  },

  ["/users/:id"]: {
    get: {
      method: "GET",
      path: "/users/:id",
      callback: (req: Request, res: Response, next: NextFunction) => {
        /* Log of ID */
        console.log(req.params.id);

        const { id } = req.params;

        const foundUser = users.find((user) => user.id === id);

        res.send(foundUser);
      },
    },

    post: {
      method: "POST",
      path: "/users/:id",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    put: {
      method: "PUT",
      path: "/users/:id",
      callback: (req: Request, res: Response, next: NextFunction) => {},
    },

    patch: {
      method: "PATCH",
      path: "/users/:id",
      callback: (req: Request, res: Response, next: NextFunction) => {
        /* Here we get id parameter */
        const { id } = req.params;

        /* Here we create variable "user", that do search among users 
        and searching the user with id, who we enter to the path */
        const user = users.find((user) => user.id === id);

        /*  */
        const { name, role, age } = req.body;

        if (name) {
          user.name = name;
        }

        if (role) {
          user.role = role;
        }

        if (age) {
          user.age = age;
        }

        /*  */
        res.send(`User with ${id} was updated successfuly!`);
      },
    },

    delete: {
      method: "DELETE",
      path: "/users/:id",
      callback: (req: Request, res: Response, next: NextFunction) => {
        /*  */
        const { id } = req.params;

        /*  */
        users = users.filter((user) => user.id !== id);

        res.send(`User with ${id} was deleted successfuly.`);
      },
    },
  },
};
