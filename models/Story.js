const { Schema, model } = require('mongoose');
const { validateEmail } = require('../utils/validator');

// Schema to create Student model
const commentSchema = new Schema(
  //     _id: lskdjf,
  //     storyBody: "slkdjfldsakjflsakjfdlsakjdf;ldsakj",
  //     storyType: "love",
  //     storyTitle: " lksjdfldskj"
  //     comments [
    //         # comments object 1
    //         {
      //             _id: lsdjflsj,
      //             commentBody: "skdjfkdsjfskdjfhdskj",
      //             stars: 5,
      //             user: username
      
      //         },
      //         # comments object 2
      //         {
        //             _id: lsdjflsj,
        //             commentBody: "skdjfkdsjfskdjfhdskj",
        //             stars: 5
        
        //         },
        //         ...
        //     ]
        // }
        // {
          {
            body: {
              type: String,
              required: true,
              max: 280,
            },
            user_id: {
              type: Schema.Types.ObjectId,
              ref: 'user',
              get: (timestamp) => validateEmail(timestamp)
            },
            }, {
              id: true,
            })
        
        
      // Schema to create a story model
      const storySchema = new Schema(
            {
                story_text: {
                    type: String,
                    required: true,
                    max: 280,
                    min: 1,
                },
                comments: [
                    commentSchema,
                ],
            },
            {
                timestamps: true,
                id: true,
            }
    
        );

const Story = model('story', storySchema);

module.exports = Story;
