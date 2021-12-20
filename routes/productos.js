const { Router } = require('express');
const { getProductos, getProducto, createProducto, updateProducto, deleteProducto } = require('../controllers/productos');
const router = Router();

router.get('/api/', getProductos);

router.get('/api/:id', getProducto);

router.put('/api/:id', updateProducto);

router.post('/api/', createProducto);

router.delete('/api/:id', deleteProducto);

module.exports = router;