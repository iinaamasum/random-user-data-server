const data = require('../userData/userDataParse');

module.exports.getRandomUser = (req, res, next) => {
  const users = data;
  const randomNumber = Math.floor(Math.random() * 100);
  const randomUser = users.find((user) => user.id === randomNumber);
  res.status(200).send({
    status: 'success',
    message: 'random user data --> object',
    data: randomUser,
  });
};

module.exports.getAllUser = (req, res, next) => {
  const users = data;
  res.status(200).send({
    status: 'success',
    message: 'all user data --> array',
    data: users,
  });
};
