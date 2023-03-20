import {Document} from 'mongoose';

export interface ICat extends Document {
  name?: string;
  email?: string;
  password?: string;
}