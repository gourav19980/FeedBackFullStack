//Route handler
const passport = require('passport');
const { reset } = require('nodemon');

module.exports = (app) => {
    app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req,res)=>{
            res.redirect('/surveys');
        }
        );

    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect("/");
    })

    app.get('/api/current_User',(req,res)=>{
        res.send(req.user);
    })
};

//create route handler with associated route
