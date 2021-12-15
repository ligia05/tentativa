const inicial = require ('../database/BuscaGeral.json');

 
    const controller = { 
      
        listar: (req, res)=> {
            return res.render('home',{inicial, busca:""});
           
        },
        getInicial: (req, res) => {
    
            const idInicial = req.params.id;
            let idPrev = null;
            let idNext = null;
        
        
        const produtohome = inicial.find(
            (p, i) => {
                idPrev = inicial[i-1]==undefined?undefined:inicial[i-1].id;
                idNext = inicial[i+1]==undefined?undefined:inicial[i+1].id;
                return p.id == idInicial
            });
            res.render('produtohome',{produtohome, idNext, idPrev});
    
        },
    
        busca: (req,res) => {
    
          
            const string = req.query.q.trim();
            const homeFiltras = inicial.filter(
                p => p.nome.toUpperCase().includes(string.toUpperCase())
            );
            res.render('home', {produtomais:produtoFiltras, busca:string});
        }
  
    }
    module.exports = controller;
