const mongoose = require("mongoose");
const PublicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true
  },
  img:{
      data: Buffer,
      contentType: String,
      required: true
  },
  date: {
    type: Date,
    required: true
  },
  text:{
    type: String,
    required:true
  }
});
const Publication = mongoose.model("Publication", PublicationSchema);
module.exports = Publication;