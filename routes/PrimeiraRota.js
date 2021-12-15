const express = require ('express');
const HomeController = require("../controllers/HomeController")
const router = express.Router();



router.get('/', HomeController.home);
//router.get('/lojinha', HomeController.lojinha);
//router.get('/lojinha/maisvendidos');

module.exports = router;