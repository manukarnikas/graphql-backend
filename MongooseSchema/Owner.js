var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ownerSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
    },

    owns: {
        type: Array,
        required: true
    },

}, {
    timestamps: true
});


var owner = mongoose.model('pokemon_owners', ownerSchema);

module.exports = owner;