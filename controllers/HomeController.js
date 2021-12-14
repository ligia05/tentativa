const produtomais = require ('../database/MaisVendidos.json');
const fs = require('fs')
const { validationResult } = require('express-validator')
const controller { 
    listar: (req, res)=> {
        return res.render('lojinha',{produtomais, busca:""});
       
    },
    getProduto: (req, res) => {

        // Capturar o id requisitado (req.params)
        const idProduto = req.params.id;
        let idPrev = null;
        let idNext = null;
     
    },
    const produtos = produtomais.find(
        (p, i) => {
            idPrev = produtomais[i-1]==undefined?undefined:produtomais[i-1].id;
            idNext = produtomais[i+1]==undefined?undefined:produtomais[i+1].id;
            return p.id == idPrduto
        });
        res.render('maisvendidos',{produtos, idNext, idPrev});

    },

    busca: (req,res) => {

        // Capturar a string digitada pelo visitante
        const string = req.query.q.trim();
        const produtoFiltras = produtomais.filter(
            p => p.nome.toUpperCase().includes(string.toUpperCase())
        );
}
 
      
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
