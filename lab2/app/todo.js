const mongoose = require('mongoose');

module.exports = () => {

    const dbHost = process.env.DBHOST | 'localhost';

    mongoose.connect(`mongodb://${dbHost}/todo`);

    return mongoose.model('Todo', {
        name: String,
        priority: Number,
    });
};