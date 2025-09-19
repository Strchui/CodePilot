async function fetchCodingChallenge(language) {
  const response = await axios.get(`https://api.codechallenge.com/challenge?language=${language}`);
  return response.data;
}

app.get('/api/coding-challenges/:language', async (req, res) => {
  try {
    const challenge = await fetchCodingChallenge(req.params.language);
    if (!challenge) return res.status(404).json({ error: 'No coding challenge found' });
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coding challenge from API' });
  }
});
