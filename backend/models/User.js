const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  UserName: { type: String, required: [true, 'Please enter your name'] },
  Password: {
    type: String, required: [true, 'Please enter your password'],
    minlength: [6, 'Minimum password length is 6 characters']

  },
  Email: {
    type: String, required: [true, 'Please enter your email']
  }
})








const User = mongoose.model('User', userSchema);


module.exports = User;

