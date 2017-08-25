const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const router = express.Router();
const localDatabaseUrl = 'mongodb://localhost:27017/UsersDB';
const url = process.env.MONGOLAB_URI || localDatabaseUrl;
var port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '../dist'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '../dist/index.html'));
});

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

var getAdminData = (db, callback) => {
    var collection = (url === localDatabaseUrl) ? db.collection('Admin') : db.collection('about_admin');
    collection.find({}).toArray((err, docs) => {
        callback(docs);
    });
}

var getHomeData = (db, callback) => {
    var collection = db.collection('Home');
    collection.find({}).toArray((err, docs) => {
        callback(docs);
    });
}
app.listen(port);
console.log('Node server running in port:', port);