const express = require('express');
const RotasProdutos= require('./routes/ProdutoRota');

const app = express();
//pp.set("view engine", "ejs");
//app.set("views","./views");
app.use(express.json());
//app.use(express.urlencoded({extended:false}));
app.use('/',RotasProdutos);
app.use(express.static(__dirname + "/public"));

//app.use("/", AdmRouter);


app.listen(3000,()=> {console.log("rodando")})
