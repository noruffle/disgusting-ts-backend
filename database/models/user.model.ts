import userInterface from '../../interfaces/user.interface';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema<userInterface>({
  name: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true,
  },
})

export default mongoose.model('User', userSchema);