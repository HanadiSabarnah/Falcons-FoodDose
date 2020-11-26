var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    Name:
    {
        type: String
    },
    Image:
    {
        type: String
    },

});



let Category = mongoose.model('Category', CategorySchema);

module.exports = Category