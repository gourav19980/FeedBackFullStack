//emported expres library
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser=require('body-parser');
const keys = require('./config/keys');
require('./models/Users');
require('./models/Survey');
require('./services/passport');
//generates an application

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// below line is similar to const authRoute= require('./routes/authRoutes); ___________ authRoutes(app)

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveysRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    // making sure that Express will serves us production asset i.e, main.js and main.js
    app.use(express.static('client/build'));
    //Express will send index.js if no route is there
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}

// app --> Express App to register this route handler with

//get --> watch for incoming requests with this method

// '/' --> watch for requests trying to access '/'

// req --> object representing the incoming requests

//res --> Object representing the outgoing requests

//res.send({hi:'there'}) --> Immediately send some JSON to who ever made this request


// app.get('/', (req, res) => {
//     res.send({ hi: 'Hello there' });
// });

//app.Listen(5000) --> instructs express to run in this port 5000

//env variable is given port at run time
const PORT = process.env.PORT || 5000;
app.listen(PORT);





/** some Other methods
 * get --> Get info
 * post --> send Info
 * put --> update all the properties of something
 * delete --. delete something
 * patch --> update one or two properties of something
 */