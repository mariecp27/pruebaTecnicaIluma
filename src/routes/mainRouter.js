// Módulos
const express = require('express');

// Ejecución
const router = express.Router();

// Controlador
const mainController = require('../controllers/mainController');

// Middlewares
const validateProductCreation = require('../middlewares/validateProductCreationMiddleware');

// Rutas
router.get('/', mainController.index);

router.get('/create', mainController.create);
router.post('/create', validateProductCreation, mainController.store);

router.get('/edit/:id', mainController.edit);
router.put('/edit/:id', validateProductCreation, mainController.update);

router.delete('/delete/:id', mainController.destroy);

module.exports = router;