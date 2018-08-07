// Inicializar Firebase. Información sobre permisos y dominios del proyecto
const initiaziling = () => {
  const config = {
    apiKey: "AIzaSyCiLDBi-b0s3qQ7StQwIpepNwyEX65LHyo",
    authDomain: "affamato-project.firebaseapp.com",
    databaseURL: "https://affamato-project.firebaseio.com",
    projectId: "affamato-project",
    storageBucket: "affamato-project.appspot.com",
    messagingSenderId: "371498322149"
  };
	// Inicializa la app web con las credenciales del proyecto "diabetipsoficials"
  firebase.initializeApp(config);
  // Añadir variable para referenciar todos los metodos de la base de datos
  console.log(firebase);
  const db = firebase.firestore();
  return (db);
};
