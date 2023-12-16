const express = require('express');

const { indexView, tablasView, loginView, notificacionesView, historial_transaccionesView, registro_productoView } = require('../controllers/homeController');
const router = express.Router();

router.get('/', loginView);
router.get('/home', indexView);
router.get('/tablas', tablasView);
router.get('/notificaciones', notificacionesView);
router.get('/historial_transacciones', historial_transaccionesView);
router.get('/registro_producto', registro_productoView);


module.exports = {
    routes: router
}