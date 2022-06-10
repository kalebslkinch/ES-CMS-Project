import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  await client.connect();
  // Replace with Database Name below!!!
  const db = client.db('Storage');
  return { db, client };
}

export { connect };
