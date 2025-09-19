app.get('/api/analytics', async (req, res) => {
  try {
    const totalJobs = await Job.countDocuments({});
    const filledJobs = await Interview.countDocuments({ status: 'completed' });
    const hiringProgress = totalJobs ? (filledJobs / totalJobs) * 100 : 0;

    const passedInterviews = await Interview.countDocuments({ 'feedback.rating': { $gte: 3 } });
    const interviewPassRate = filledJobs ? (passedInterviews / filledJobs) * 100 : 0;

    const jobPopularity = await Job.aggregate([
      { $lookup: { from: 'interviews', localField: '_id', foreignField: 'job', as: 'applications' } },
      { $project: { title: 1, applicationCount: { $size: '$applications' } } },
      { $sort: { applicationCount: -1 } },
    ]);

    res.json({ hiringProgress, interviewPassRate, jobPopularity });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
});