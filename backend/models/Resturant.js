var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    resCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    Name:
    {
        type: String
    },
    Image:
    {
        type: String
    },
    Phone:
    {
        type: Number
    },
    Address:
    {
        type: String
    },

});


let Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant