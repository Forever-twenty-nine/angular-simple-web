const glob = require('glob');

// Ruta a verificar
//const pathToCheck = "../ftn-workspace/projects/ftn-components/src/**/*.{html,ts,scss}";

const pathToCheck = "src/assets/header.png";

// Buscar archivos en la ruta
glob(pathToCheck, (err, files) => {
  if (err) {
    console.error('Error:', err);
  } else {
    if (files.length > 0) {
      console.log('Archivos encontrados:', files);
    } else {
      console.log('No se encontraron archivos en la ruta:', pathToCheck);
    }
  }
});
