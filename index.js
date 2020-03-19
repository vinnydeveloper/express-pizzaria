const express = require('express')

let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')

let app = express()
app.set('view engine', 'ejs');

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




app.listen(3000, ()=>console.log("Servidor rodando perfeitamente"))