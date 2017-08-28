const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const localDatabaseUrl = 'mongodb://localhost:27017/UsersDB';
const url = process.env.MONGOLAB_URI || localDatabaseUrl;

function initAbout(app) {
    app.get('/info', (req, res) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                console.log('Connection failed with error:', err);
                res.send('Connection failed');
            } else {
                getAdminData(db, (result) => {
                    res.send(result[0]);
                    db.close();
                });
            }
        });
    });
}

var getAdminData = (db, callback) => {
    var collection = (url === localDatabaseUrl) ? db.collection('Admin') : db.collection('about_admin');
    collection.find({}).toArray((err, docs) => {
        callback(docs);
    });
}

module.exports = initAbout;