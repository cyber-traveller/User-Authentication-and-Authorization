const express = require('express');
const connectDB = require('./config/dbconfig');
const bodyParser = require('body-parser');
const AuthenticationRoutes = require ('./routes/AuthenticationRoutes');

require ('dotenv').config();

const app = express();

app.use(bodyParser.json())

connectDB();

app.use('/api/users', AuthenticationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));