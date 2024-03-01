const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("servidor ativo")
})

app.get("/", function(req, res){
    console.log("Pagina principal")
    res.send("pagina principal")
})

app.get("/cadastrar", function(req, res){
    console.log("cadastrar")
    res.send("cadastrar")
})

app.get("/produtos/:item/:quantidade", function(req, res){
    res.send("Pagina produtos: " + req.params.item + " Quantidade: " + req.params.quantidade)
})

app.get("/contato", function(req, res){
    res.send("contato")
})