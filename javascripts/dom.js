const petCardHolder = document.getElementById('pets-container');

const domString = (pets) => {
  let domStrang = '';
  pets.forEach((pet) => {
    domStrang += `<div class="card col-md-4">`;
    domStrang += `<h1 class-"panel-title">${pet.name}</h1>`;
    domStrang += `<img class="card-img-top" alt="Card image" cap src="${pet.imageUrl}">`;
    domStrang += `<div class="card-body">`;
    domStrang += `<h4>${pet.color}</h4>`;
    domStrang += `<p>${pet.specialSkill}</p>`;
    domStrang += `</div>`;
    domStrang += `<div class="card-footer">`;
    domStrang += `<h3 class="card-title">${pet.type}</h3>`;
    domStrang += `</div>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printPetsToDom = (pets) => {
  petCardHolder.innerHTML = domString(pets);
  // events.addPetEvents();
};

module.exports = printPetsToDom;
