const fs = require('fs');

function writeAndReadFile(filename, content, callback) {
  fs.writeFile(filename, content, (err) => {
    if (err) return callback(err);

    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) return callback(err);
      callback(null, data);
    });
  });
}

module.exports = {
  writeAndReadFile
};
