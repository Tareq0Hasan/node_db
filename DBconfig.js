const { MongoClient } = require("mongodb");
require('dotenv').config()
const client = new MongoClient(process.env.DATABASE_LOCAL);

console.log('database connected successfully')

module.exports={client}