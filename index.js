//emported expres library
const express = require('express');

//generates an application

const app = express();


//create route handler with associated route

// app --> Express App to register this route handler with

//get --> watch for incoming requests with this method

// '/' --> watch for requests trying to access '/'

// req --> object representing the incoming requests

//res --> Object representing the outgoing requests

//res.send({hi:'there'}) --> Immediately send some JSON to who ever made this request


app.get('/', (req, res) => {
    res.send({ hi: 'Hello there' });
});

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