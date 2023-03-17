import routes from './routes/route';
import DEFAULT from './env.config';
import mongoose from 'mongoose';
import app from './app';

export class Default {

  constructor() {
    this.connectDatabase()
    this.connectRoutes()
    this.connectServer()
  }

  async connectDatabase (): Promise<void> {
    await mongoose.connect(DEFAULT.MONGO.DB).then(() => { 
      console.log(`Database connected`)
    })
  }

  async connectServer (): Promise<void> {
    app.listen(DEFAULT.PORT, () => { 
      console.log(`Server started.`)
    })
  }

  async connectRoutes (): Promise<void> {
    routes();
  } 
}