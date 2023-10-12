const mongoose = require('mongoose')

  mongoose.connect('mongodb://127.0.0.1:27017/tornadodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((db) => {console.log('Se ha conectado exitosamente a MongoDB')})
  .catch((err) => console.log(err))
