const { Router } = require('express');
const { getProductos, getProducto, createProducto, updateProducto, deleteProducto } = require('../controllers/productos');
const router = Router();

router.get('/', getProductos);

router.get('/:id', getProducto);

router.put('/:id', updateProducto);

router.post('/', createProducto);

router.delete('/:id', deleteProducto);

module.exports = router;