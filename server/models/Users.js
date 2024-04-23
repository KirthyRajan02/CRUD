const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    age: Number,
    physics: Number,
    chemistry: Number,
    maths: Number,
    //total,cutoff
    total: Number,
    cutoff: Number
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel