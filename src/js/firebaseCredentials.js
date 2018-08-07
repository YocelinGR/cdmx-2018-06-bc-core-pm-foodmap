// Inicializar Firebase. Información sobre permisos y dominios del proyecto
const initiaziling = () => {
  const config = {
    apiKey: "AIzaSyBtEPEuMvBuLOCfhq9gJNVWgNdSFg9j4Gk",
    authDomain: "pruebasfirebase-4521c.firebaseapp.com",
    databaseURL: "https://pruebasfirebase-4521c.firebaseio.com",
    projectId: "pruebasfirebase-4521c",
    storageBucket: "pruebasfirebase-4521c.appspot.com",
    messagingSenderId: "696990683166"
  };
	// Inicializa la app web con las credenciales del proyecto "diabetipsoficials"
  firebase.initializeApp(config);
  // Añadir variable para referenciar todos los metodos de la base de datos
  console.log(firebase);
  const db = firebase.firestore();
  return (db);
};
