const config = {}

config.mongoDB = {
    url: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/UsersDB'
}

module.exports = config