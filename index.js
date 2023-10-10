const server = require('./src/app.js');
require('./src/db.js');
const {PORT} = process.env



  server.listen(3001, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });


 