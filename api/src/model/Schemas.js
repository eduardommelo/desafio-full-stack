const mongoose = require('mongoose')
const { USER_DATA } = require('../../Constants')
const { Schema } = mongoose

const UsersSchema = new Schema(USER_DATA)

module.exports = {
    
    UsersModel: mongoose.model('Users', UsersSchema)
}
