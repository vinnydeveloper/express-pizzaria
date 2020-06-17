const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const session = require('express-session')
let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')
let rotasPedido = require('./routes/pedidoRoute');

let app = express()
app.set('view engine', 'ejs');
app.use(express.static(path.join('public')))
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:'hdsbvhjdbvu0',
    resave:true,
    saveUninitialized:true,
}))
app.use(methodOverride("_method"))
app.get('/:nome', (req, res)=>
    {

    let nome = req.params.nome;
    res.render('admin/index', {
        produtos:["produtos1","produtos2", "produtos3", "produtos4"],
        teste:nome
    })
})
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);
app.use('/pedido', rotasPedido);




app.listen(process.env.PORT || 8000, ()=>console.log("Servidor rodando perfeitamente", path.join('/public')))
