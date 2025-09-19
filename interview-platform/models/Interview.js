const InterviewSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  interviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  interviewType: { type: String, enum: ['online', 'offline'] },
  schedule: {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    location: String,
  },
  feedback: {
    rating: Number,
    comments: String,
    submittedAt: { type: Date },
  },
  status: { type: String, enum: ['scheduled', 'completed'], default: 'scheduled' },
  createdAt: { type: Date, default: Date.now },
});
const Interview = mongoose.model('Interview', InterviewSchema);