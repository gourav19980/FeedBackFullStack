const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String,
});

//users is the collection in database
mongoose.model('users',userSchema);