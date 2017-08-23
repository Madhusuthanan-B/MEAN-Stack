const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const router = express.Router();
const localDatabaseUrl = 'mongodb://localhost:27017/UsersDB';
const url = process.env.MONGOLAB_URI || localDatabaseUrl;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var port = process.env.PORT || 3000;

app.get('/info', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Connection failed with error:', err);
            res.send('Connection failed');
        } else {
            console.log('Connection successful');
            getAdminData(db, function (result) {
                res.send(result);
                db.close();
            });
        }
    });

});

var getAdminData = function (db, callback) {
    var collection = (url === localDatabaseUrl) ? db.collection('Admin') : db.collection('about_admin');
    collection.find({}).toArray(function (err, docs) {
        callback(docs);
    });
}
app.listen(port);

console.log('Server is running:', port);