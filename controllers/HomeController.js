const produtomais = require ('../database/MaisVendidos.json');
const fs = require('fs')
module.exports={
 
      
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
