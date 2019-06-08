// loading dependancies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// connect to Routes
const RenovationObj = require('./routes/renovation_obj.route');
const defaultPath = require('./routes/default.route');

// initialize express app
const app = express();

// connect to local mongoDB
let url = 'mongodb://localhost:27017/renovation';
mongoose.connect(url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection Error'));
db.once('open', function callback () {
    console.log('Connected To Mongo Database');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/renovation_obj', RenovationObj);
app.use('/', defaultPath);

// Port app is running on
let port = 1234;

app.listen(port, () => {
    console.log('Running.... on port ' + port);
})