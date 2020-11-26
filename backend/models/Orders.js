var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var orderScheema = new Schema({
    resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    food:[], // to add orders inside of it
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


let Order = mongoose.model('Order', orderScheema);

module.exports = Order