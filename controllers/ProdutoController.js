const produtomais = require ('../database/MaisVendidos.json');
const controller = { 
    

list: (req,res) => {
    res.send(produtomais);
},
 
    lojinha: (req,res)=> {
        res.render('lojinha')
    },
    home:(req,res)=> {
        res.render("home");
    },
}      
module.exports  = controller;

