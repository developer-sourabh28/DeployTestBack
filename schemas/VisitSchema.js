const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    place :{
        type : String,
        required : true,
    },
    memory :{
        type : String,
        required : true,
    },
    writter :{
        type : String,
        required : true,
    },
})

module.exports = mongoose.model('Visit', VisitSchema);