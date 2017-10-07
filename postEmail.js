var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eMailSchema = new Schema({
  eMail: {
    type: String,
    required: true,
    trim: true
  },
  date: { type: Date, default: new Date().getTime() }
});

var eMailModel = mongoose.model('eMail', eMailSchema);

module.exports = { eMailModel };
