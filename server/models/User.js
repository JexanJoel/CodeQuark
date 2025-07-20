const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  streak: { type: Number, default: 0 },
  lastActivity: { type: Date, default: Date.now },
  progress: {
    react: [{ chapter: Number, completed: Boolean, quizScore: Number }],
    nodejs: [{ chapter: Number, completed: Boolean, quizScore: Number }],
    mongodb: [{ chapter: Number, completed: Boolean, quizScore: Number }]
  }
});

module.exports = mongoose.model('User', userSchema);