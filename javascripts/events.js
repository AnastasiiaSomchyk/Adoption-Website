
const addListenerToButtons = (fn) => {
  const buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    console.log('is this working?');
    buttons[i].addEventListener('click', (e) => {
      return fn(e);
    });
  }
};

module.exports = addListenerToButtons;
// const dinoBtn = document.getElementById('dino');
// const godBtn = document.getElementById('dog');
