const { User } = require('../models');

const userData = [{
        username: 'Toomeme',
        password: 'Password123'

    },
    {
        username: 'EndlessEntropy666',
        password: 'darkness'
    },
    {
        username: 'ballercool12',
        password: 'dribble46'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
