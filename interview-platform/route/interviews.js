app.post('/api/interviews', async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    sendNotification(interview.applicant, 'interview-scheduled');
    sendNotification(interview.interviewer, 'interview-scheduled');
    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create interview' });
  }
});

app.put('/api/interviews/:id/feedback', async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(
      req.params.id,
      {
        feedback: { ...req.body.feedback, submittedAt: Date.now() },
        status: 'completed',
      },
      { new: true }
    );
    sendNotification(interview.applicant, 'interview-feedback-submitted');
    res.json(interview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

function sendNotification(user, eventType) {
  console.log(`Sending ${eventType} notification to user ${user}`);
}