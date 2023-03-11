export interface UserInterface {
  important: {

    email: String
    password: String
    dob: String
    age: number
  };

  info: {

    nickname: String
    avatar: String
    fullName: {

      firstName: String
      lastName: String
    };

    gender: String
    location: {
      country: String
      city: String
    };

    socialMedia: Object
  }
}