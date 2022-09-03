const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./userData/userDataParse');
const randomUser = require('./routes/aRandomUser.route.js');
const port = 4000;

app.use(cors());
app.use(express.json());

// routes
app.use('/user', randomUser);

app.all('/', (req, res) => {
  res.status(200).send('Server is running');
});

app.listen(port, () => {
  console.log(`random user app listening on port ${port}`);
});
