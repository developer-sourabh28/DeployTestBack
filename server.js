const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();
const SignupRoute = require('./routes/SignupRoute');
const LoginRoute = require('./routes/LoginRoute');
const VisitRoute = require('./routes/VisitRoute');

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('MongoDB connected')
})
.catch((err) => console.log(err))

app.use(cors({
    origin:'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials : true,
}))

app.use("/signup", SignupRoute )
app.use("/login", LoginRoute);
app.use("/visit", VisitRoute)

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})