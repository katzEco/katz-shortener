let mongoose = require('mongoose')

const userSlug = new mongoose.Schema({
  slug: {
    required: true,
    unique: true,
    type: String,
  },
  destination: {
    required: true,
    type: String,
  },
  date: {
    type: String,
    default: new Date().getTime(),
  },
})

module.exports = mongoose.model('slugs', userSlug)
