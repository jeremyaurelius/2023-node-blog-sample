import mongoose = require('mongoose');

// this is the database name in cluster -> collections
// if we don't specify a database name, it will default to test
const mongoDBName = '2023NodeNetNinjaDB';

const { MONGO_DB_CLUSTER, MONGO_DB_USERNAME, MONGO_DB_PASSWORD } = process.env;

export async function setUpMongoDB() {
  // connect to mongodb
  const mongoDBURI = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER}.mongodb.net/${mongoDBName}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(mongoDBURI);
    console.log('[debug] connected to DB');
  } catch (error) {
    console.error('[debug] connection error', error);
  }
}

// mongoose.connection.once('open', () => {
//   console.log('[debug] connected to DB');
// });