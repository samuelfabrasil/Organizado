const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    text:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Publication', publicationSchema)