const upload = multer({ dest: 'uploads/' });
app.post('/api/jobs', upload.array('attachments'), async (req, res) => {
  try {
    const job = new Job(req.body);
    if (req.files) {
      job.attachments = req.files.map((file) => ({ filename: file.originalname, path: file.path }));
    }
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job' });
  }
});

app.get('/api/jobs', async (req, res) => {
  try {
    let query = Job.find();
    if (req.query.search) query = query.where({ $text: { $search: req.query.search } });
    const sortBy = req.query.sortBy || 'createdAt';
    const jobs = await query.sort(sortBy).exec();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});
