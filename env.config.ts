import {routes} from './src/route';

export const DEFAULT = {
  DB: "mongodb+srv://ruffle:7112812kreZ@cluster-ruffle.vplqcb5.mongodb.net/?retryWrites=true&w=majority",
  TITLE: "disgusting",
  PORT: 3000,
  LISTEN: () => console.log('Server conncetion was successful'),
  DB_LOG: () => console.log('Database connection was successful'),
  ERR_LOG: (err: any) => console.log([err]),
  ROUTER: () => routes
}

