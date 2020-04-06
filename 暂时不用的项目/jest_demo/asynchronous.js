const request = require('request');

function fetchData(callback) {
  request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
    callback(body);
  });
}

module.exports = fetchData;