require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Coefficiency</h1>
      <Link href="/dashboard">
        <a>Go to Dashboard</a>
      </Link>
    </div>
  );
}
