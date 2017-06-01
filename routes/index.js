var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require("pg");

var conString = "postgres://admin:admin@localhost/DSSTracker";


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

/* GET home page. */
router.get('/ui', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'ui.html'));
});

/* GET home page. */
router.get('/ag', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'ag.html'));
});


router.get('/dssdata', function(req,res){

    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * from dss.dss_trial', function (err, result) {

            if (err) {
                return console.error('error running query', err);
            }

            console.log(result.rows);
            res.json(result.rows);
        });

    });





});

module.exports = router;
