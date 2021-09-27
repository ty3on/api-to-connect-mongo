require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', (error) => console.log('connected to database'));
app.listen(3000, () => console.log('Server Started'));

app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);
