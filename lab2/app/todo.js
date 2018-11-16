module.exports = (mongoose) => {
    return mongoose.model('Todo', {
        name: String,
        priority: Number,
    });
};