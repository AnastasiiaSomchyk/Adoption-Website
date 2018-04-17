const printPetsToDom = require('./dom');

const onSuccess = function (e) {
  console.log(e);
  const petsData = JSON.parse(e.currentTarget.responseText).pets;
  console.log(petsData);
  printPetsToDom(petsData);
};

const onError = (error) => { console.log('Error bruh: ', error); };

module.exports = {
  onSuccess,
  onError,
};
