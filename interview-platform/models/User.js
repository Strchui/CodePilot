const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'hr', 'interviewer', 'candidate'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
