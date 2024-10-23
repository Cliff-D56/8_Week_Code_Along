const express = require('express');
const connectDb = require("./config/db");
const app = express();

//Connect to MongoDB
connectDb();

app.get('/', (req,res)=> res.send("My API is running"));

//Define api routes
app.use("/api/users", require('./routes/api/users')),
app.use('/api/auth', require('./routes/api/auth')),
app.use('/api/profile', require('./routes/api/profile')),
app.use('/api/cars', require('./routes/api/car'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running ${PORT}`));