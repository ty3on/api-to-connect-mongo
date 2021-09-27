const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postcode: {
    type: Number,
  },
  phone: {
    type: Number,
    required: true,
  },
  email_address: {
    type: String,
    required: true,
  },
  email_domain: {
    type: String,
    required: true,
  },
  ip_address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
