const mongoose = require('mongoose')
const { MONGO_URL } = process.env

  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((db) => {console.log('Se ha conectado exitosamente a MongoDB')})
  .catch((err) => console.log(err))
