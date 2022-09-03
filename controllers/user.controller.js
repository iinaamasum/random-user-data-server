const data = require('../userData/userDataParse');

module.exports.getRandomUser = (req, res, next) => {
  const users = data;
  const randomNumber = Math.floor(Math.random() * 100);
  res.status(200).send(users.find((user) => user.id === randomNumber));
};
