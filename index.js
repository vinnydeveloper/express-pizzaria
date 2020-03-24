const express = require('express')
const path = require('path')

let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')
let rotasPedido = require('./routes/pedidoRoute');

let app = express()
app.set('view engine', 'ejs');
app.use(express.static(path.join('/public')))

app.use(express.urlencoded({extended:true}));
//localhost.com.br/css/style.css
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




app.listen(3000, ()=>console.log("Servidor rodando perfeitamente", path.join('/public')))