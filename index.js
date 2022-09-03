const express = require('express');
const app = express();
const port = 4000;

const userData = require('./userData/userData.json');
console.log(JSON.stringify(userData));

app.all('/', (req, res) => {
  res.status(200).send('Server is running');
});

app.listen(port, () => {
  console.log(`random user app listening on port ${port}`);
});
