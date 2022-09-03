const data = require('../userData/userDataParse');

module.exports.getRandomUser = (req, res, next) => {
  const users = data;
  const randomNumber = Math.floor(Math.random() * 100);
  const randomUser = users.find((user) => user.id === randomNumber);
  res.status(200).send({
    success: true,
    message: 'found a random user',
    data: randomUser,
  });
};
