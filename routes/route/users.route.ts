import { Controller } from "../../controllers/users.controller";
import express from "express";

export const users = express.Router();

/* '/users' */
users.get('/users', Controller['/users'].get.callback)
users.post('/users', Controller['/users'].post.callback)

/* '/users/:id */
users.get('/users/:id', Controller['/users/:id'].get.callback)
users.patch('/users/:id', Controller['/users/:id'].patch.callback)
users.delete('/users/:id', Controller['/users/:id'].delete.callback)