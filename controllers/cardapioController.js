const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req, res)=>{
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {cardapio:listaDePizza, tituloDaPagina:"Será que da certo?"})
    }

}
 
module.exports = cardapioController