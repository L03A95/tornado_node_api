const { Router } = require('express');
const { menuRouter } = require('./menuRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', menuRouter)

module.exports = router;