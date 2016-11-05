var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var jwt = require('jsonwebtoken');
var config = require('./config');
var data = require('./data.js');

var port = process.env.PORT || 8080;
app.set('secret', config.secret);

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
var router = express.Router();


router.get('/', function(req, res) {
    res.send("Hello!");
})

router.get('/bears', function(req, res) {
    res.json(data);
})


app.use('/api', router);

app.listen(port);
console.log("Server started at http://localhost:"+port);
