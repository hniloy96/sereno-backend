const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
},
  {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            delete ret.password
            return ret

        }

    }
})

userSchema.method.generateAuthToken = function() {
    const token = jwt.sign({id:this._id},process.env.JWTPRIVATEKEY, {expiresIn: '10d'})
    return token
}

const User = mongoose.model('userInfo', userSchema)
module.exports = User;