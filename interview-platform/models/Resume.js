const ResumeSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  attachments: [{ filename: String, path: String }],
  createdAt: { type: Date, default: Date.now },
});
const Resume = mongoose.model('Resume', ResumeSchema);