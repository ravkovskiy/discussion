var express = require('express');
var path = require('path');
var config = require('./app/config');
var mongoose = require('./app/mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var favicon = require('serve-favicon');
var HttpError = require('./app/error').HttpError;
var ObjectID = require('mongodb').ObjectID;
var port: number = process.env.PORT || config.get('port');
var app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));



var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}



app.use(bodyParser());

app.use(cookieParser());

var MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(function(req, res, next) {
    req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
    res.send("Visits: " + req.session.numberOfVisits);
})

app.use(require('./app/middleware/sendHttpError'));



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

app.get('/*', renderIndex);

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