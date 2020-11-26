const mongoose = require('mongoose');
// var url = "mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/skyscan?retryWrites=true&w=majority"
const db = mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/Resturants?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))
module.exports = db