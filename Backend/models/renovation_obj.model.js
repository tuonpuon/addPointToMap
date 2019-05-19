const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RenovationObjSchema = new Schema({
    title: {type: String, required: true, max: 100},
    description: {type: String, required: false, max: 500},
    geo_location: { type: Number, required: true},
    created: { type:Date, default:Date },
    last_edited: { type:Date, default:Date },
});


// Export the model
module.exports = mongoose.model('renovation_obj', RenovationObjSchema, 'renovation_obj');