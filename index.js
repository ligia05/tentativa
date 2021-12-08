const express = require('express');
const RotasProdutos= require('./ProdutoRota')

const app = express()
app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname + "/public"));

//app.use("/", AdmRouter);


app.listen(3000,()=> {console.log("rodando")})
