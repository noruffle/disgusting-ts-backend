import express from "express";
import { Controller } from "../../controllers/tools.controller";

export const tools = express.Router();


tools.get('/calc', Controller['/calc'].get.callback)

tools.post('/calc', Controller['/calc'].post.callback)