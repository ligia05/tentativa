const produtomais = require ('../database/MaisVendidos.json');
const fs = require('fs');
const { validationResult } = require('express-validator');
const controller = { 
    listar: (req, res)=> {
        return res.render('lojinha',{produtomais, busca:""});
       
    },
    getProduto: (req, res) => {

        const idProduto = req.params.id;
        let idPrev = null;
        let idNext = null;
    
    
    const produto = produtomais.find(
        (p, i) => {
            idPrev = produtomais[i-1]==undefined?undefined:produtomais[i-1].id;
            idNext = produtomais[i+1]==undefined?undefined:produtomais[i+1].id;
            return p.id == idPrduto
        });
        res.render('produtos',{produtos, idNext, idPrev});

    },

    busca: (req,res) => {

      
        const string = req.query.q.trim();
        const produtoFiltras = produtomais.filter(
            p => p.nome.toUpperCase().includes(string.toUpperCase())
        );
        res.render('lojinha', {produtomais:produtoFiltras, busca:string});
    },
create: (req, res) => {
    res.render('crud-lojinha/criar')
},

store: (req,res) => {
    const erros = validationResult(req);
        
        if(!erros.isEmpty()){
            // return res.send(erros.mapped());
            res.render('crud-lojinha/criar', {erros: erros.mapped()})
        }
        const nome = req.body.nome;
        const ingredientes = req.body.ingredientes.split(',').map(a => a.trim());
        const preco = Number(req.body.preco);
        const produto = {nome, ingredientes, preco, img:'/img/' + req.file.filename}
        produto.id = produtomais[produtomais.length - 1].id + 1;

        produtomais.push(produto);
 
        fs.writeFileSync(
            __dirname + '/../database/MaisVendidos.json',
            JSON.stringify(pizzas, null, 4),
            {flag:'w'}
        );
        
        
        res.redirect('/lojinha/produtos');

    }

}
 
module.exports = controller;
   
