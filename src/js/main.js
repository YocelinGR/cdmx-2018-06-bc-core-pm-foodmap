
 function initMap(){
   console.log('entra');
   const userLocated = new Localizando(()=>{
     const locatingConfigurations = {
       center: {
         lat: userLocated.latitude,
         lng: userLocated.longitude
       },
       zoom: 15
     }
     console.log('toma');
     var map = document.getElementById('drawMaps');
     console.log('mapitas');
     const drawMap = new google.maps.Map(document.getElementById('drawMaps'), locatingConfigurations);
     console.log('quque');
   });
 }
