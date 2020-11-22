var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var foodScheema = new Schema({
    type:
    {
        type: String
    },
    price:
    {
        type: String
    },
    resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
})


let Food = mongoose.model('Food', foodScheema);

module.exports = Food