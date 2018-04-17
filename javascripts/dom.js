const petCardHolder = document.getElementById('pets-container');

const domString = (pets) => {
  let domStrang = '';
  pets.forEach((pet) => {
    domStrang += `<div class="card">`;
    domStrang += `<h1 class-"panel-title">${pet.name}</h1>`;
    domStrang += `<img class="card-img-top" alt="Card image" cap src="${pet.imageUrl}">`;
    domStrang += `<div class="card-body">`;
    domStrang += `<h6>${pet.color}</h6>`;
    domStrang += `<p>${pet.specialSkill}</p>`;
    domStrang += `</div>`;
    domStrang += `<div class="card-footer">`;
    domStrang += `<h5 class="card-title">${pet.type}</h5>`;
    domStrang += `</div>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printPetsToDom = (pets) => {
  petCardHolder.innerHTML = domString(pets);
  // events.addPetEvents();
};

module.expots = printPetsToDom;
