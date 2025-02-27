// Write your Pizza Builder JavaScript in this file.

const priceListCopy = document.querySelector('.price ul').cloneNode(true)

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  whiteSauceSection = document.querySelector('.sauce-white')
  if (state.whiteSauce) {
    whiteSauceSection.style.visibility = 'visible';
  } else {
    whiteSauceSection.style.visibility = 'hidden';
  };
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  crustGlutenFreeSection = document.querySelector('.crust-gluten-free')
  if (state.glutenFreeCrust) {
    crustGlutenFreeSection.style.visibility = 'visible';
  } else {
    crustGlutenFreeSection.style.visibility = 'hidden';
  };
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  const pepperoniBtn = document.getElementsByClassName('btn-pepperoni')[0].classList
  const mushroomsBtn = document.getElementsByClassName('btn-mushrooms')[0].classList
  const greenPeppersBtn = document.getElementsByClassName('btn-green-peppers')[0].classList
  const sauceBtn = document.getElementsByClassName('btn-sauce')[0].classList
  const crustBtn = document.getElementsByClassName('btn-crust')[0].classList

  if (state.pepperoni) {
    if (!pepperoniBtn.contains('active')) {
      pepperoniBtn.add('active');
    }
  } else {
    if (pepperoniBtn.contains('active')) {
      pepperoniBtn.remove('active');
    }
  }
  if (state.mushrooms) {
    if (!mushroomsBtn.contains('active')) {
      mushroomsBtn.add('active');
    }
  } else {
    if (mushroomsBtn.contains('active')) {
      mushroomsBtn.remove('active');
    }
  }
  if (state.greenPeppers) {
    if (!greenPeppersBtn.contains('active')) {
      greenPeppersBtn.add('active');
    }
  } else {
    if (greenPeppersBtn.contains('active')) {
      greenPeppersBtn.remove('active');
    }
  }
  if (state.whiteSauce) {
    if (!sauceBtn.contains('active')) {
      sauceBtn.add('active');
    }
  } else {
    if (sauceBtn.contains('active')) {
      sauceBtn.remove('active');
    }
  }
  if (state.glutenFreeCrust) {
    if (!crustBtn.contains('active')) {
      crustBtn.add('active');
    }
  } else {
    if (crustBtn.contains('active')) {
      crustBtn.remove('active');
    }
  }
}

function cleanPriceList(parentList) {
  const childrenList = document.querySelectorAll('.pricesList li')
  childrenList.forEach((child)=>{
    parentList.removeChild(child)
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const parentList = document.getElementsByClassName('pricesList')[0]
  cleanPriceList(parentList)

  const totalPriceValue = document.querySelector('.price strong');
  let totalPrice = 0

  const pricePepperoniListItem = '<li id="pep-price">$1 pepperoni</li>'
  const priceMushroomsListItem = '<li id="mush-price">$1 mushrooms</li>'
  const priceGreenPeppersListItem = '<li id="gpep-price">$1 green peppers</li>'
  const priceWhiteSauceListItem = '<li id="sauce-price">$3 white sauce</li>'
  const priceGlutenFreeCrustListItem = '<li id="crust-price">$5 gluten-free crust</li>'

  if (state.pepperoni) {
    parentList.innerHTML += pricePepperoniListItem;
    totalPrice += 1
  }
  if (state.mushrooms) {
    parentList.innerHTML += priceMushroomsListItem;
    totalPrice += 1
  }
  if (state.greenPeppers) {
    parentList.innerHTML += priceGreenPeppersListItem;
    totalPrice += 1
  }
  if (state.whiteSauce) {
    parentList.innerHTML += priceWhiteSauceListItem;
    totalPrice += 3
  }
  if (state.glutenFreeCrust) {
    parentList.innerHTML += priceGlutenFreeCrustListItem;
    totalPrice += 5
  }

  totalPriceValue.innerText = '$'+totalPrice
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  // console.log('click on mushrooms', state.mushrooms)
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  // console.log('click on green-peppers', state.greenPeppers)
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
