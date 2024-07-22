import axios from 'axios';

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const response = await axios.get('https://coefficiency-39fead0059f9.herokuapp.com/api/applications', {
      params: { userId },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
}
