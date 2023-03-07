import mongoose from 'mongoose';
import {User} from '../../interfaces/user.interface';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  nickname: {
    type: String,
    required: true,
  },
  
  dob: {
    type: Date,
    required: true
  }
})

export default mongoose.model("User", userSchema);