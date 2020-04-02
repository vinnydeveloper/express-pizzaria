const express = require('express')
const UsuarioController = require('../controllers/usuarioController')
let route = express.Router()



route.get('/cadastro', UsuarioController.viewFormCadastro)
route.post('/cadastro', UsuarioController.salvarCadastro)

route.get('/login', UsuarioController.viewFormLogin)
route.post('/login', UsuarioController.login)
module.exports = route;
