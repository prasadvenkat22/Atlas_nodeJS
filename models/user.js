const mongoose = require('mongoose')
const Apps = require('./App')

const userSchema = mongoose.Schema(
  {
    name: {      type: String,      required: [true, 'Please add a name'],    },
    email: {      type: String,      required: [true, 'Please add an email'],      unique: true,    },
    password: {      type: String,      required: [true, 'Please add a password'],    },
    AppID: {      type: Number,      required: [true, 'Please enter a valid AppID'],   }

  },  {    timestamps: true,  }
)

module.exports = mongoose.model('User', userSchema)