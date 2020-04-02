const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req, res)=>{
        let listaDePizza = Cardapio.listarCardapio();
        let {usuarioLogado} = req.session

        if(usuarioLogado != undefined && usuarioLogado != null){
            res.render('cardapio', {cardapio:listaDePizza, tituloDaPagina:"Será que da certo?", usuarioLogado})
        }else {
            res.render('cardapio', {cardapio:listaDePizza, tituloDaPagina:"Será que da certo?"})
        }
       
    },
    viewFormCadastro: (req, res)=>{
        res.render('cadastroPizza')
    },
    criarPizza:(req, res) =>{
        let [novaPizza] = req.files
        Cardapio.cadastrarPizza(req.body.nomePizza, req.body.precoPizza, novaPizza.filename);
        res.redirect('/cardapio/ver')
    },

    removerPizza:(req, res) =>{
        let {posicao} = req.params
        Cardapio.deletarPizza(posicao)
        return res.redirect('/cardapio/ver')
    }
}
 
module.exports = cardapioController