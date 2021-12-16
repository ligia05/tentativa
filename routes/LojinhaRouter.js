const express = require ('express');
const ValidadorDeProduto = require('../Middlewares/ValidadorDeProduto');
const LojinhaController = require('../controllers/LojinhaController')
const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {cb(null, __dirname + '/../public/img')},
        filename: (req, file, cb) => {
            console.log(file);
            cb(null,Date.now() + '-' + file.originalname);
        }
    }
);
const upload = multer({storage})

const router = express.Router();
router.get('/lojinha/cadastrar', LojinhaController.criar);
router.post('/lojinha/cadastrar', upload.single('image'), ValidadorDeProduto, LojinhaController.store);
router.get('/lojinha/maisvendidos', LojinhaController.listar);
router.get('/lojinha/:id', LojinhaController.getProduto);
router.get('/lojinha/maisvendidos', LojinhaController.busca);
router.get('/lojinha/produtos', LojinhaController.store);

module.exports = router;