const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const localDatabaseUrl = 'mongodb://localhost:27017/UsersDB';
const url = process.env.MONGOLAB_URI || localDatabaseUrl;

function initHome(app) {
    app.get('/mean', (req, res) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                console.log('Connection failed with error:', err);
                res.send('Connection failed');
            } else {
                getHomeData(db, (result) => {
                    res.send(result[0]);
                    db.close();
                });
            }
        });

    });
}

var getHomeData = (db, callback) => {
    var collection = db.collection('Home');
    collection.find({}).toArray((err, docs) => {
        callback(docs);
    });
}

module.exports = initHome;