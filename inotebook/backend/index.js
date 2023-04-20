const express = require('express');
const connectToMongo = require('./db');
connectToMongo();


const app = express()
const port = 5000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Jai Shree Ram')
})

// Availlbel routes

app.use('/api/auth', require('./routes/auth.js'))
// app.use('./api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("Succefully Connected");
})