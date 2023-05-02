// pull request library (requires npm download for request library)
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // call request, use breed name from user input

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    // check for connection error
    if (error) {
      return callback(error, null);
    }
    // parse json data to js
    const data = JSON.parse(body);

    // return error msg if no matching breed name from user
    if (data.length === 0) {
      return callback(`no breed found`, null);
    }
    // return description if match
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };