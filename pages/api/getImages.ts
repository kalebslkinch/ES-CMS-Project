import { connect } from '../../lib/mongodb';
export default async (req, res) => {
  const { db } = await connect();
  const data = await db.collection('ES_Images').find({}).toArray();
  res.json(data);
};
