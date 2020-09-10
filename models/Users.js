const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String,
    credits: {
        type:Number,
        default:0
    }
});

//users is the collection in database
mongoose.model('users',userSchema);