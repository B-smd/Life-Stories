const { faker } = require("@faker-js/faker");
const Story = require("../models/Story");
const User = require('../models/User');
const getRandomModel = require("./seed-helper");
async function seedStories(numbers) {
    await Story.deleteMany();

    const stories = [];

    for (let index = 0; index < numbers; index++) {

        const randomUser = await getRandomModel(User);

        const created = await Story.create({
            story_text: faker.lorem.sentence(10),
            // I need to randomly get a user id here

            reactions: [{
                body: faker.lorem.sentence(3),
                user_id: randomUser._id,
            }]
        });

        await User.findOneAndUpdate({
            _id: randomUser._id
        }, {
            $push: {
                stories: created._id,
            }
        })

        stories.push(created);
    }
    return stories;

}

module.exports = seedStories;