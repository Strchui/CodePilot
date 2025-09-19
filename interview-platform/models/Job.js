const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  attachments: [{ filename: String, path: String }],
  createdAt: { type: Date, default: Date.now },
});
const Job = mongoose.model('Job', JobSchema);