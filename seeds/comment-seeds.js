const { Comment } = require('../models');

const commentData = [{
        comment_text: "Hey nice work!",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "This is trash, dude.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Make a dating sim haha.",
        user_id: 2,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;