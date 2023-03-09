import mongoose from 'mongoose';
import config from '../env.config';

export default class Database {
  constructor() {
    this.config(mongoose)
  }

  private config(database: mongoose.Mongoose): void {
    database.connect(config.mongo.DB)
      .then(
        () => console.log(`\n[DATABASE]: Database successfully connected`)
      )
      .catch(
        (err) => console.log(err)
      )
  }
}