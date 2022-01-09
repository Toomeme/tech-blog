const { Post } = require('../models');

const postData = [{
        title: 'OpenGL Non-Euclidian Geometry Demo',
        content: 'Whatever, this wasnt even hard actually so whatever.',
        user_id: 1

    },
    {
        title: 'RPGMaker horror game',
        content: 'This is a pinnacle achievement in the worlds of both code and art, you philistines lack understanding of my genius',
        user_id: 2
    },
    {
        title: 'Hello World!',
        content: 'No bully please, this is my first post',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;