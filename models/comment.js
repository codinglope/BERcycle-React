const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  title: String,
  email: String,
  description: String,
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;