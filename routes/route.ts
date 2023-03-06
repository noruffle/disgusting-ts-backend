
import { download } from './route/download.route';
import { basic } from './route/basic.route';
import { error } from './route/error.route';
import { tools } from './route/tools.route';
import { users } from './route/users.route';
import { api } from './route/api.route';

import express from 'express';
const app = express();

export const routers = () => {
  app.use(tools) 
  app.use(users)
  app.use(basic)
  app.use(api)
  app.use(download) 
  app.use(error)
}


// const app = express();
// export const router = () => {
//   const obj = [
//     {route: basic}
//   ]
  

//   function everyUse(item: any) {
//     obj.forEach((item) => {
//       app.use(item.route)
//     })  
//   }

//   everyUse(obj)
// }

// export const rh = () => {
  const usage = [
    // {
      //   path: express.static(__dirname + "/public"),
      //   description: "Define static files for style",
      // },
      
      // {
        //   path: express.urlencoded({ extended: true }),
        //   description: "For calculator with method POST",
        // },
        
        // { path: express.json(), description: "Parsing data to JSON format" },
        
        // Middleware
        // {path: require('./middleware/api-password'),
        // description: "Autentication wall: ?u=ruffle"},
  
        // Routes
        { basic: require("./route/basic.route") },
        // { router: require("./route/tools.route") },
        // { router: require("./route/api.route") },
        // { router: require("./route/users.route") },
        // { router: require("./route/download.route") },
        // { router: require("./route/error.route") },
  ];

  usage.forEach((route) => {
    console.log(route.basic)
    app.use(route.basic)
//   });
  







