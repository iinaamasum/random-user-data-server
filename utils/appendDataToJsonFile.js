const fs = require('fs');
const path = require('path');

const appendDataToJsonFile = (updatedData) => {
  fs.writeFile(
    path.join(__dirname + '/../userData/userData.json'),
    updatedData,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

module.exports = appendDataToJsonFile;
