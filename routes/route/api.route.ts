import express from "express";
import { Controller } from "../../controllers/api.controller";

export const api = express.Router();

api.get('/api', Controller['/api'].get.callback)
