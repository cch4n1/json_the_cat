// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
// call fetchBreedDescription: takes user input, logs error or desccription through callback
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});