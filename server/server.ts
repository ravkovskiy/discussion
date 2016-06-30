import express = require('express');
import path = require('path');
var config = require('./app/config');
var HttpError = require('./app/error').HttpError;
var ObjectID = require('mongodb').ObjectID;
var port: number = process.env.PORT || config.get('port');
var app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));



var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.use(require('./app/middleware/sendHttpError'));

//app.get('/*', renderIndex);

var User = require('./app/models/user').User;
app.get('/users', function(req, res, next) {
    User.find({}, function(err, users) {
        if(err) return next(err);
        res.json(users);
    })
});
app.get('/user/:id', function(req, res, next) {

    try {
        var id = new ObjectID(req.params.id);
    } catch(e) {
        return next(404);
    }
    User.findById(id, function(err, user) {
        if(err) return next(err);
        if(!user) {
            next(new HttpError(404, 'User not found'));
        } else
        res.json(user);
    })
});

app.use(function(err, req, res, next) {
    if(typeof err == 'number') {
        err = new HttpError(err);
    } 
    if(err instanceof HttpError) {
        res.sendHttpError(err);
    } else {
            err = new HttpError(500);
            res.sendHttpError(err);
    }
});
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});