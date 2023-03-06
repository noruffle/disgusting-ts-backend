import express from "express";
import { Controller } from "../../controllers/basic.controller";

export const basic = express.Router();

// Home
basic.get("/", Controller["/"].get.callback);

// Anime
basic.get("/anime", Controller["/anime"].get.callback);
basic.get("/anime/watch", Controller["/anime/watch"].get.callback);

// Manga
basic.get("/manga", Controller["/manga"].get.callback);
basic.get("/manga/read", Controller["/manga/read"].get.callback);