import express from "express";
import { Controller } from "../../controllers/download.controller";

export const download = express.Router();


download.get('/download', Controller['/download'].get.callback)

download.route('/download').get(Controller["/download"].get)
