const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log(`serving ${req.method} for ${req.url}`);
  next();
});

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/api/data', (req, res) => {
  res.status(200).send('Hello World!\n');
})

app.listen(port, () => {
  console.log(`Safety app listening at http://localhost:${port}`)
})