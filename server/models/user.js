const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
 "name": String,
 "pass": String
})

module.exports = mongoose.model("userModel", userSchema)