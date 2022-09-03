const data = require('../userData/userDataParse');

const randomUserInList = (limit) => {
  const users = data;
  const highest = users.length - limit;
  const randomNumber = Math.floor(Math.random() * highest);
  return randomNumber;
};

module.exports = randomUserInList;
