const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


//User is a modal class and can be used to create another instance
const User = mongoose.model('users');
passport.serializeUser((user, done) => {
    //userid is not same as profile id, we are making use of id assigned by mongo
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    (accessToken, refreshToken,profile,done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser)=>{
                if(existingUser){
                    // we already have a record in our database
                    //syntax --> done(error,userLists)
                    done(null, existingUser);
                }
                else{
                    //we don't have record in database then go and make it
                    new User({ googleId: profile.id })
                        .save()
                        .then((user) => done(null, user));

                }
            })
        
        }
    )
);