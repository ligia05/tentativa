const produtos = require ('../database/MaisVendidos.json');

const controller = { 
    maisVendidos: (req,res)=>{
         res.send(produtos);
    }
}
module.exports  = controller

