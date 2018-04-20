const data = require('./data');
const fetchPets = require('./pets');
const events = require('./events');
const dom = require('./dom');
// let localData = [];

const main = () => {
  fetchPets(data.onSuccess);
  events((e) => {
    fetchPets((response) => {

      const data = JSON.parse(response.currentTarget.responseText);
      const clickedId = e.target.id;
      console.log('response: ', data);
      const filteredPets = [];

      if (clickedId === 'reset') {
        return dom(data.pets);
      }

      data.pets.forEach((pet) => {
        console.log('pet: ', pet);
        if (pet.type === clickedId) {
          filteredPets.push(pet);
        }
      });

      console.log('filtered PEts', filteredPets);
      dom(filteredPets);

    });
  });
};

main();
