let cardapio = [
    {nome:"Calamussa", preco:"R$30,00"},
    {nome:"Frango com Catupiry", preco:"R$35,00"},
    {nome:"Romanesca", preco:"R$35,00"}
]

function listarCardapio(){
    return cardapio
}

function cadastrarPizza(nome, preco){
    return cardapio.push({nome, preco})
}


module.exports = {listarCardapio, cadastrarPizza}