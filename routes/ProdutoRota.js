const express = require ('express');
const ProdutoController = require("../controllers/ProdutoController")
const router = express.Router();



router.get('/', ProdutoController.home);
router.get('/lojinha', ProdutoController.lojinha);
router.get('/lojinha/maisvendidos', ProdutoController.list);

module.exports = router;