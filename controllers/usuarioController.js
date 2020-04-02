const Usuario = require('../models/Usuario')

const bcrypt = require('bcrypt');

const UsuarioController = {
    viewFormCadastro: (req, res)=>{
        return res.render('auth/cadastroUsuario')
    },

    salvarCadastro: (req, res)=>{
        let {nomeUsuario, emailUsuario, senhaUsuario} = req.body

        let resultado = Usuario.cadastrarUsuario(
            nomeUsuario,
            emailUsuario,
            bcrypt.hashSync(senhaUsuario, 10)
        )
        if(resultado){
            return res.render('auth/cadastroUsuario', {msg:"Usuario cadastrado com sucesso"})
        }else {
            return res.render('auth/cadastroUsuario', {msg:"Usuario não foi cadastrado, tente de novamente!"})
        }
    },

    viewFormLogin: (req, res)=>{
        return res.render('auth/login')
    },

    login:(req, res)=>{
        let {emailUsuario, senhaUsuario} = req.body

        let usuarioSalvo = Usuario.buscarUsuario(emailUsuario);

        if(usuarioSalvo == undefined || !bcrypt.compareSync(senhaUsuario, usuarioSalvo.senha)){
            return res.render('auth/login', {msg:"Email ou senha invalida!"})
        }

        req.session.usuarioLogado = usuarioSalvo.nome

        res.redirect('/cardapio/ver')
    }
}

module.exports = UsuarioController