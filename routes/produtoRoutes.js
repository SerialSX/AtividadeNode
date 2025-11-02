const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.criar);
router.get('/', produtoController.listarTodos);

router.get('/:id', produtoController.listarUm);

module.exports = router;