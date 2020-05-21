const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  id: Number,
  name: String,
  shortDesc: String,
  longDesc: String,
  date: Date,
  pictures: Array
});

module.exports = mongoose.model('Project', projectSchema);
