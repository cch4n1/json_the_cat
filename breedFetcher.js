// pull request library (requires npm download for request library)
const request = require('request');
// get breed name
const breedName = process.argv[2];

// call request, use breed name from user input
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  // check for connection error
  if (error) {
    console.error('Error:', error);
    return;
  }
  // parse json data to js
  const data = JSON.parse(body);
  // return error msg if no matching breed name from user
  if (data.length === 0) {
    console.log(`breed not found`);
    return;
  }
  // print description if match
  console.log(data[0].description);
});