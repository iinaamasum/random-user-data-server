const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/user.route.js');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// routes
app.use('/user', userRouter);

app.all('/', (req, res) => {
  res.status(200).send('Server is running');
});

app.listen(port, () => {
  console.log(`random user app listening on port ${port}`);
});
