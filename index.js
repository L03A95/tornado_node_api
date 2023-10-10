const server = require('./src/app.js');
const conection = require('./src/db.js');
const {PORT} = process.env

// Syncing all the models at once.

conection()
  .then(() => {
    console.log('Conexión exitosa a MongoDB');

    server.listen(3001, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error en la conexión a MongoDB:', err);
  });
 