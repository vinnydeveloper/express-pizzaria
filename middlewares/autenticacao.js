function autenticacao(req, res, next){
    let {usuarioLogado} = req.session

    if(usuarioLogado != undefined && usuarioLogado != null){
        return next();
    }

    return res.redirect('/usuarios/login')
}

module.exports  = autenticacao