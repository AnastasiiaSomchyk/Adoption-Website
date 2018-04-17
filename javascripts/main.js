const data = require('./data');
const fetchPets = require('./pets');

const main = () => {
  fetchPets(data.onSuccess);
};

main();
