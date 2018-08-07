// Variable de firebase
let DB = initiaziling();
// Variables para utilizar los mapas
let markers = new Array();
let markersAux = new Array();
let markersBackup = new Array();
// Obtener ubicacion del usuario para iniciar el mapa ahí
/*const getUserLocation = () =>{
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(obtainingPosition);
  } else {
    console.log('No es posible usar geolocalizacion en tu browser');
  }
}*/
const showRate = () => {
  let rateID = document.getElementById('select-rate').value;
  return rateID;
}
const showPrice = () => {
  let priceID = document.getElementById('select-price').value;
  return priceID;
}
const showType = () => {
  let typeID = document.getElementById('select-type').value;
  return typeID;
}
const filter = () => {
  let rate = showRate();
  let price = showPrice();
  let type = showType();
  let placesRef = DB.collection("places");
//  citiesRef.where("state", "==", "CA").where("population", "<", 1000000)
  if ( rate == 'bueno' && (price == 'cien' && type == 'mexicana')){
    console.log(placesRef.where("price", "==", "$100 a $200 ").where("type", "==", "Mexicana ").where("rate", "==", "Bueno"));
  }
  if ( rate == 'bueno' && (price == 'cien' && type == 'otro')){
    console.log(placesRef.where("price", "==", "$100 a $200 ").where("rate", "==", "Bueno"));
  }
  if ( rate == 'bueno' && (price == 'doscientos' && type == 'mexicana')){
    console.log(placesRef.where("price", "==", "$200 a $400 ").where("type", "==", "Mexicana ").where("rate", "==", "Bueno"));
  }
  if ( rate == 'bueno' && (price == 'doscientos' && type == 'otro')){
    console.log(placesRef.where("price", "==", "$200 a $400 ").where("rate", "==", "Bueno"));
  }
  if ( rate == 'bueno' && (price == 'cuatrocientos' && type == 'mexicana')){
    console.log(placesRef.where("price", "==", "$400 a $600 ").where("type", "==", "Mexicana ").where("rate", "==", "Bueno"));
  }
  if ( rate == 'bueno' && (price == 'cuatrocientos' && type == 'otro')){
    console.log(placesRef.where("price", "==", "$400 a $600 ").where("rate", "==", "Bueno"));
  }
  if ( rate == 'excelente' && (price == 'cien' && type == 'mexicana')){
    console.log(placesRef.where("price", "==", "$100 a $200 ").where("type", "==", "Mexicana ").where("rate", "==", "Excelente"));
  }
  if ( rate == 'excelente' && (price == 'cien' && type == 'otro')){
    console.log(placesRef.where("price", "==", "$100 a $200 ").where("rate", "==", "Excelente"));
  }
  if ( rate == 'excelente' && (price == 'doscientos' && type == 'mexicana')){
    console.log(placesRef.where("price", "==", "$200 a $400 ").where("type", "==", "Mexicana ").where("rate", "==", "Excelente"));
  }
  if ( rate == 'excelente' && (price == 'doscientos' && type == 'otro')){
    console.log(placesRef.where("price", "==", "$200 a $400 ").where("rate", "==", "Excelente"));
  }
  if ( rate == 'excelente' && (price == 'cuatrocientos' && type == 'mexicana')){
    console.log(placesRef.where("price", "==", "$400 a $600 ").where("type", "==", "Mexicana ").where("rate", "==", "Excelente"));
  }
  if ( rate == 'excelente' && (price == 'cuatrocientos' && type == 'otro')){
    console.log(placesRef.where("price", "==", "$400 a $600 ").where("rate", "==", "Excelente"));
  }
}
const obtainingPosition = () =>{
  let lat = 19.4046509;
  let lng = -99.16404949999999;
  console.log(lat, lng);
  let creatingMap = L.map('mapaSpace').setView([lat, lng], 14);
	let osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	let osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	let osm = new L.TileLayer(osmUrl, {
	    minZoom: 5,
	    maxZoom: 16,
	    attribution: osmAttrib
	});
  osm.addTo(creatingMap);
  let  userMarker = L.marker([lat, lng]);
  userMarker.bindPopup('<p>Tu estas aquí</p><p>Latitud:'+lat+'</p><p>Longitud:'+lng+'</p>');
	userMarker.addTo(creatingMap);
  DB.collection('places').onSnapshot((querySnapshot) => { // onStapshot va a vigilar cuando haga cambios y si hay un cambio entra y te dice que fue lo que cambió
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${Object.values(doc.data().location)}`);
    });
  });
}
obtainingPosition();
