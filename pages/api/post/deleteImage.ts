import { connect } from '../../../lib/mongodb';

export default async (req, res) => {
  // Requests Data from front end
  const { body } = req;
  // Connects to MongoDB
  const { db } = await connect();
  // Gets the Products Collection
  const products = await db
    .collection('ES_Images')
    // Inserts the requested data from the front end
    .deleteOne(body, function (err, res) {
      if (err) throw err;
      // Create a response for a front end console log

      console.log('1 document inserted');
    });

  res.json({ message: '1 entry made' });
};
