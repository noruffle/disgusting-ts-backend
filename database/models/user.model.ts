import {UserInterface} from '../../interfaces/user.interface';
import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
  // Register 
  important: {
    type: Object,

    email: String,
    password: String,
    dob: Function
  },
  // up to update
  info: {
    type: Object,

    nickname: String,
    avatar: String,
    fullName: {
      type: Object,

      firstName: String,
      lastName: String
    },
    gender: String,
    location: {
      type: Object,
      
      county: String,
      city: String
    },
    socialMedia: String

  }

})



export default mongoose.model('User', userSchema);


/**
 * User
 * 
 * registration { method: post
 * email
 * password
 * }
 * 
 * update user { method: patch
 * nickname (login)
 * photo
 * 
 * fullname: first name, last name
 * about
 * gender: male, female, other
 * date of birth
 * location: country, city
 * social medias: vk, twitter, inst, twitch, discord, telegram
 * }
 * 
 */