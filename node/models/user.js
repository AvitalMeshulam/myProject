const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: {
        type: String,
        default: 'avital',
        trim: true
    },
    age:{
        type: Number
    },
    city:{
        type:String
    },
    mail: {
        type: String,
        require: true,
        minlength: '9'
    },
    phon: {
        type: Number,
        require: true,
        minlength: '7'
    }
})

module.exports = mongoose.model('user', user);