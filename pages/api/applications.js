import axios from 'axios';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    await client.connect();
    const database = client.db('YourDatabaseName');
    const applications = database.collection('applications');

    const response = await axios.get('https://coefficiency-39fead0059f9.herokuapp.com/api/applications', {
      params: { userId },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  } finally {
    await client.close();
  }
}
