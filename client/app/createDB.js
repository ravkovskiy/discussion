var User = require('./models/user').User;

var user = new User({
    username: "Tester3",
    password: "secret"
});
user.save(function(err, user, affected) {
    if(err) throw err;

    User.findOne({username: "Tester"}, function(err, tester) {
        if(err) throw err;
        console.log(tester);
        
    })
})