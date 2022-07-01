const { Schema, model } = require('mongoose');
const {validateEmail} = require('../utils/validator');

// Schema to create user model
const userSchema = new Schema(
    // {
    //     _id: 12234,
    //     username:  "sdlkjfldsj", # make user name unique,
    //     password "123", ????,
    //     email: "lskdjfds@gmail.com",
    //     stories: [story-id1, story-id2, ...],
    
    
    // }
    
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"]
    },
    stories: [
        {
            type: Schema.Types.ObjectId,
            ref: "story",
    },
],
    // friends: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "user",

    //     },
    // ],
},
  {
    timestamps: true,
    id: true,
    },
);

const User = model('user', userSchema);

module.exports = User;
