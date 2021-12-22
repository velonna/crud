const { Router } = require('express');
const { getCarritos, getCarrito, createCarrito, deleteCarrito } = require('../controllers/carrito');
const router = Router();

router.get('/', getCarritos);

router.get('/:id', getCarrito);

router.post('/', createCarrito);

router.delete('/:id', deleteCarrito);

module.exports = router;