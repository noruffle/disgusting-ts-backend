import * as dotenv from 'dotenv';

dotenv.config()

interface Config {
  port: any,
  token: any,
  title: String,
}

export const config: Config = {
  port: process.env.PORT || 3000,
  token: process.env.MONGODB_URI,
  title: `disgusting` + ' - ',
}