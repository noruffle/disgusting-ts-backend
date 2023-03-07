export interface User {
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

}