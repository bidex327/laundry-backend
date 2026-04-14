const mongoose = require("mongoose");



const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required:true
    },
    email:{
        type: String
    },

    message:{
        type: String,
        required: true
    },
}, {timestamps: true},
);

const Message = mongoose.model("message", messageSchema);

module.exports = Message;