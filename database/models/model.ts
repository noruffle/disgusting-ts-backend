import { connect } from 'mongoose';
import { config } from '../../config';

export const connectDatabase = async () => { 
  try {
    await connect(config.token);
  } catch (err) {
    console.log(err);
    return false;
  }
}