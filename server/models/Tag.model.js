const mongoose = require('mongoose')

// schema definition

const TagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A description is required.']
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
)

const Tag = mongoose.model('Tag', TagSchema)

module.exports = Tag
