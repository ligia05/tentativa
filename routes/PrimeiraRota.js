const express = require ('express');
const HomeController = require("../controllers/HomeController")
const router = express.Router();



router.get('/', HomeController.listar);
router.get('/buscarprodutos', HomeController.getInicial);
router.get('/buscarprodutos', HomeController.busca);



module.exports = router;