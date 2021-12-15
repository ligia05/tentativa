// Importar o express
const express = require('express');

const AdmController = require("../controllers/AdmController");

const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {cb(null, __dirname + '/../public/image')},
        filename: (req, file, cb) => {
            console.log(file);
            cb(null,Date.now() + '-' + file.originalname);
        }
    }
);
const upload = multer({storage})


// Importar o PizzasController

const LojinhaController = require('../controllers/LojinhaController');
// Criar roteador
const router = express.Router();

// Definir rotas às quais ele responde
router.get('/lojinha/cadastrar', LojinhaController.create);
router.post('/lojinha/cadastrar', upload.single('image'), ValidadorDeProduto, LojinhaController.store);

router.get('/lojinha/maisvendidos');
router.get('/login', AdmController.showLogin);
router.post('/login', AdmController.login);

// Exportar o roteador
module.exports = router;