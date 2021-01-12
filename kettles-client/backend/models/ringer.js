const mongoose = require('mongoose');

const ringerSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phoneNumber: String,
  notes: String
});

module.exports = mongoose.model('ringer', ringerSchema);


