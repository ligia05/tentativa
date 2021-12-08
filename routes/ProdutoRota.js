const express = require ('express');
const Produtocontroller = require("../controllers/ProdutoController")
const router = express.Router();

router.get('/produtos', Produtocontroller.maisVendidos);




module.exports = router;