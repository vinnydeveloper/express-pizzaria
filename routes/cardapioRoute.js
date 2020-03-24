const express = require('express')
const cardapioController = require('../controllers/cardapioController');

let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})

route.get('/ver', cardapioController.listarCardapio)
route.get('/cadastro', cardapioController.viewFormCadastro)

route.post('/cadastro', cardapioController.criarPizza)

module.exports = route