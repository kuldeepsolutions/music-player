const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = 'myDB';
async function getConnection(){
   
    await client.connect();
    console.log("Connected Successfully.");
    const db = client.db(dbName);
    return "done";
}
module.exports = getConnection();


















