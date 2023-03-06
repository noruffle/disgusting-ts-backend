import express from "express";
import { Controller } from "../../controllers/error.controller";

export const error = express.Router();

/* 404 */
error.use(Controller["404"].callback);

/* 500 */
error.use(Controller["500"].callback)