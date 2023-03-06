import { download } from './routes/route/download.route';
import { basic } from './routes/route/basic.route';
import { error } from './routes/route/error.route';
import { tools } from './routes/route/tools.route';
import { users } from './routes/route/users.route';
import { api } from './routes/route/api.route';

import { config } from "./config";
import mongoose from "mongoose";
import express from "express";

const app = express();

// Engine
mongoose.set("strictQuery", false);
app.set("view engine", "ejs");

// Static
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use([basic, tools, api, users, download, error]);

app.listen(config.port, () => {
  console.log(
    `\nStarted on http://localhost:${config.port}\nUse Ctrl + C to end proccess`
  );
});
