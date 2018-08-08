let orderByName = document.getElementById('getResByName');
let orderByCategory = document.getElementById('getResByCategory');
let orderByRate = document.getElementById('getResByRate');
let orderByPrice = document.getElementById('getResByPrice');
let showRestaurantes = document.getElementById('showRestaurantes');

const modalesRestaurants = (restaurantes) => {
  showRestaurantes.innerHTML = '';
  let templetes = '';
  restaurantes.forEach((restaurant) => {
    templetes += `<div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="${restaurant.img}">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">${restaurant.name}<i class="material-icons right">more_vert</i></span>
                      <p>Dirección: ${restaurant.address}</p>
                      <p>Categoria: ${restaurant.category}</p>
                      <p>Telefono: ${restaurant.phone}</p>
                      <p><a href="${restaurant.linkMap}">Ver Mapa</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Qué esperar<i class="material-icons right">close</i></span>
                      <p>Evaluación: ${restaurant.rate}</p>
                      <p>Precio más bajo: ${restaurant.lowPrice}</p>
                      <p>Precio más alto: ${restaurant.hightPrice}</p>
                    </div>
                  </div>`;
  });
  showRestaurantes.innerHTML = templetes;

}

const orderByNameFunc = (restaurantes) => {
  const result = restaurantes.sort((arrayA, arrayB) => {
        var nameA = arrayA.name.toLowerCase(), nameB = arrayB.name.toLowerCase();
        if (nameA < nameB) return -1; // Retorna "namaA" primero si es menor que nameB
        if (nameA > nameB) return 1; // Retorna "namaB" primero si es menor que nameA
        return 0;
      });
  return result;
}

const orderByCategoryFunc = (restaurantes) => {
  const result = restaurantes.sort((arrayA, arrayB) => {
        var nameA = arrayA.category.toLowerCase(), nameB = arrayB.category.toLowerCase();
        if (nameA < nameB) return -1; // Retorna "namaA" primero si es menor que nameB
        if (nameA > nameB) return 1; // Retorna "namaB" primero si es menor que nameA
        return 0;
      });
  return result;
}

const orderByRateFunc = (restaurantes) => {
  const result = restaurantes.filter(restaurant => restaurant.rate === 'Excelente');
  return result;
}

const orderByPriceFunc = (restaurantes) => {
  const result = restaurantes.sort((arrayA, arrayB) => {
    var nameA = arrayA.lowPrice, nameB = arrayB.lowPrice;
    if (nameA < nameB) return -1; // Retorna "namaA" primero si es menor que nameB
    if (nameA > nameB) return 1; // Retorna "namaB" primero si es menor que nameA
    return 0;
  });
  return result;
}

const listeners = (array) => {

orderByName.addEventListener('click', (event) =>{
  let arrayName = orderByNameFunc(array);
  console.log(arrayName);
  modalesRestaurants(arrayName);
});
orderByCategory.addEventListener('click', (event) =>{
  let arrayCat = orderByCategoryFunc(array);
  console.log(arrayCat);
  modalesRestaurants(arrayCat);
});
orderByRate.addEventListener('click', (event) =>{
  let arrayRate = orderByRateFunc(array);
  console.log(arrayRate);
  modalesRestaurants(arrayRate);
});
orderByPrice.addEventListener('click', (event) =>{
  let arrayPrice = orderByPriceFunc(array);
  console.log(arrayPrice);
  modalesRestaurants(arrayPrice);
});
}

const getJSON = (uri) => {
    fetch(uri)
    .then(response => response.json())
    .then((result) => {
        const arrayRestaurants = Object.values(result);
        listeners(arrayRestaurants);
    })
};
const chargeApp = () => {
    const uri = 'https://api.myjson.com/bins/1e1w2w';
        getJSON(uri);
};
chargeApp();
