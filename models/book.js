var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
      title: {type: String, required: true},
      author: { type: Schema.Types.ObjectId, ref: 'Author', required: true }, //reference to the associated author
      summary: {type: String, required: true},
      isbn: {type: String, required: true},
      genre: { type: Schema.Types.ObjectId, ref: 'Genre', required: true }, //reference to the associated genre
      url: {type: String, required: true},
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
