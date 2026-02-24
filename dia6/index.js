require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const express = require('express');
// const mongoose = require('mongoose');
const usersRouter = require('./routers/usersRouter');

const app = express();
const PORT = 3000;
// const MONGO_URI = 'mongodb+srv://gus:11j7q6aZ3pmqqOUb@cluster0.n6rxh.mongodb.net/eustaquio';

app.use(express.json());

// mongoose.connect(MONGO_URI)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));


app.use('/users', usersRouter);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});