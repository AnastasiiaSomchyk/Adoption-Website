// const printPetsToDom = require('./dom');
const onSuccess = (response) => {
  console.log(JSON.parse(response.currentTarget.responseText));
  // take result and print it to dom
};

const onError = (error) => { console.log('Error bruh: ', error); };

module.exports = {
  onSuccess,
  onError,
};
