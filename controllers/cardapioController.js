const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req, res)=>{
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {cardapio:listaDePizza, tituloDaPagina:"Será que da certo?"})
    },
    viewFormCadastro: (req, res)=>{
        res.render('cadastroPizza')
    },
    criarPizza:(req, res) =>{
        Cardapio.cadastrarPizza(req.body.nomePizza, req.body.precoPizza);
        res.redirect('/cardapio/ver')
    }

}
 
module.exports = cardapioController