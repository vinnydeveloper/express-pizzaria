const express = require('express')
const cardapioController = require('../controllers/cardapioController');
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public','cardapioImg'))
    },
    filename: function (req, file, cb) {
        
        cb(null, Date.now()+ '-' + req.body.nomePizza + path.extname(file.originalname))
    }
  })
   
const upload = multer({ storage: storage })


let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})

route.get('/ver', cardapioController.listarCardapio)
route.get('/cadastro', cardapioController.viewFormCadastro)

route.post('/cadastro', upload.any(), cardapioController.criarPizza)

route.delete('/deletar/:posicao', cardapioController.removerPizza)

module.exports = route