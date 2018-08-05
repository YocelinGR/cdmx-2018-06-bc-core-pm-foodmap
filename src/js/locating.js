class Localizando {
  constructor(callback){
      // Pregunta si el navegador puede realizar las veces de localizacion
        if (navigator.geolocation){
          console.log('Tu navegador soporta la geolocalizacion');
          navigator.geolocation.getCurrentPosition((position) =>{
            this.latitude =position.coords.latitude;
            this.longitude =position.coords.longitude;
            callback();
          });
        } else {
          console.log('Tu navegador soporta la geolocalizacion');
        }
  }
}
