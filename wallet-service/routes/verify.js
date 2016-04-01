var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Phoochaliaw';

/* POST todo. */
router.post('/', function(req, res) {

    var results = [];

    // Grab data from http request
    var data = {email: req.body.email};

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users WHERE email=($1)", [data.email]);

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            if (query.count > 0) {
                return res.status(200).json({ success: true, message: "Have."});
            } else{
                return res.status(200).json({ success: true, message: "Don't have."});
            };
        });


    });
});

module.exports = router;