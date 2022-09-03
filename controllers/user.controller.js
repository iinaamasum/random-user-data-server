const data = require('../userData/userDataParse');
const randomUserInList = require('../utils/randomUserInRange');
const path = require('path');
const appendDataToJsonFile = require('../utils/appendDataToJsonFile');

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
  let users = [];
  const { limit } = req.query;

  if (limit) {
    if (limit > 100)
      return res.status(406).send({
        status: 'failed',
        message: 'The user limit exceeded',
      });
    else {
      const lowerLimit = randomUserInList(limit);
      users = data.slice(lowerLimit, Number(limit) + lowerLimit);
    }
  } else users = data;

  res.status(200).send({
    status: 'success',
    message: 'all user data --> array',
    data: users,
  });
};

module.exports.saveRandomUser = (req, res, next) => {
  const reqData = req.body;
  const users = data;
  const newUser = {
    id: users.length + 1,
    ...reqData,
  };
  users.push(newUser);
  appendDataToJsonFile(JSON.stringify(users));

  res.status(200).send({
    status: 'success',
    message: 'added a random user --> object',
    data: newUser,
  });
};
