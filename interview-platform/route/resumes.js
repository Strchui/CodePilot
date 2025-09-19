app.post('/api/resumes', upload.single('resumeFile'), async (req, res) => {
  try {
    const resume = new Resume({
      applicant: req.user.id,
      content: req.body.content || '',
      attachments: req.file ? [{ filename: req.file.originalname, path: req.file.path }] : [],
    });
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload resume' });
  }
});

app.get('/api/resumes', async (req, res) => {
  try {
    let query = Resume.find();
    if (req.query.search) query = query.where({ content: new RegExp(req.query.search, 'i') });
    const resumes = await query.exec();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resumes' });
  }
});
