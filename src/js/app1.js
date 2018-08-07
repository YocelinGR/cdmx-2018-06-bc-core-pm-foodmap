let findUser = document.getElementById('findUser');
let foodMap = document.getElementById('mapLocations');
const error = () => {
  // Funcion de error por si la llamada a las coordenadas falla
  foodMap.innerHTML = `<p>No podemos localizarte :´( </p>`;
    console.log(error, 'error');
}
const getCoords = (position) =>{
  // Obtienee imprime la posición del dispositivo que realiza la petición
  let lat =position.coords.latitude;
  let lng =position.coords.longitude;
  // foodMap.innerHTML = `<p>${'Latitude'} ${lat} <br> ${'Longitude'} ${lng}</p>`;
  var imgMap = "https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lng+"&size=600x300&markers=color:OLIVEDRAB%7C"+lat+","+lng+"&v=3.exp";
  foodMap.innerHTML = "<img src = '"+imgMap+"'>";
}
// Evento del botón que genera las acciones
 findUser.addEventListener ('click', (event) => {
   // Metodo del navegador que pide a la geolocalizacion la posicion del dispositivo
    if (navigator.geolocation){
      foodMap.innerHTML = `<p>Te estamos localizando ... </p>`;
      console.log('Localizando usuario');

    } else {
      foodMap.innerHTML = `<p>Upss, error al localizar... </p>`;
      console.log('Error localizando usuario', error);
    }
    navigator.geolocation.getCurrentPosition(getCoords, error);
 });
