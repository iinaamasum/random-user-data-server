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
    message: 'added following user --> object',
    data: newUser,
  });
};

module.exports.updateUserById = (req, res, next) => {
  const id = req.params.id;
  let users = data;
  const newData = req.body;

  const findUser = users.find((user) => user.id === Number(id));
  if (!findUser) {
    res.status(404).send({
      status: 'failed',
      message: 'given id is not found in the database',
    });
  }
  const updatedUserData = { ...findUser, ...newData };
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === Number(id)) {
      users[i] = updatedUserData;
    }
  }
  appendDataToJsonFile(JSON.stringify(users));

  res.status(200).send({
    status: 'success',
    message:
      'updated successfully of the following user with new data --> object',
    data: updatedUserData,
  });
};

module.exports.deleteUserById = (req, res, next) => {
  const id = req.params.id;
  const users = data;
  const findUser = users.find((user) => user.id === Number(id));
  if (!findUser) {
    res.status(404).send({
      status: 'failed',
      message: 'given id is not found in the database',
    });
  }

  const newUsers = users.filter((user) => user.id !== Number(id));
  appendDataToJsonFile(JSON.stringify(newUsers));
  res.status(200).send({
    status: 'success',
    message: 'following user is deleted from the database --> object',
    data: findUser,
  });
};

module.exports.bulkUpdateUser = (req, res, next) => {
  const multipleUserData = req.body;
  console.log(multipleUserData);
  const users = data;
  let flag = false;
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < multipleUserData.length; j++) {
      if (users[i].id === multipleUserData[j].id) {
        users[i] = { ...users[i], ...multipleUserData[j] };
        flag = true;
      }
    }
  }

  if (!flag)
    res.status(404).send({
      status: 'failed',
      message: 'user not found in the database by those id',
    });

  appendDataToJsonFile(JSON.stringify(users));

  res.status(200).send({
    status: 'success',
    message: 'users are updated with the following information --> array',
    data: multipleUserData,
  });
};
