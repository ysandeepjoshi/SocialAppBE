module.exports = config = {
    env: process.env.NODE_ENV || 'development',
    port: 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
    }

    //mongodb+srv://test123:test123@cluster0.srxb1.mongodb.net/FeedTheDucks?retryWrites=true&w=majority