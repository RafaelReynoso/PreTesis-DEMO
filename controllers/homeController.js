const indexView = (req, res, next) => {
    res.render('home');
}

const loginView = (req, res, next) => {
    res.render('login', { layout: false });
}

const notificacionesView = (req, res, next) => {
    res.render('notificaciones');
}

const tablasView = (req, res, next) => {
    res.render('tablas');
}

const historial_transaccionesView = (req, res, next) => {
    res.render('historial_transacciones');
}

const registro_productoView = (req, res, next) => {
    res.render('registro_producto');
}


module.exports = {
    indexView,
    tablasView,
    loginView,
    notificacionesView,
    historial_transaccionesView,
    registro_productoView
}