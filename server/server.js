const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const dataFilePath = '../database/dataImages.json';

app.use((req, res, next) => {
  console.log(`serving ${req.method} for ${req.url}`);
  next();
});

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')));

// TODO: replace this with a database
app.get('/api/data', (req, res) => {
  const dataFile = require(dataFilePath);
  res.status(200).send(dataFile);
})

app.listen(port, () => {
  console.log(`Safety app listening at http://localhost:${port}`)
})