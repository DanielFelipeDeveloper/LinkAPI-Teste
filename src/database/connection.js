const mongoose = require('mongoose');

const url = process.env.DB_URL;

module.exports = mongoose.connect(
  url || "mongodb+srv://danieldeveloper:96385274@cluster0.ji66i.mongodb.net/Cluster0?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Database successfully connected!')
})