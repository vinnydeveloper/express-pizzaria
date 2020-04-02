const fs = require('fs')
const path = require('path')

const db = path.join('cardapio.json')

function listarCardapio(){
    let listaCardapio = fs.readFileSync(db, {encoding:'utf-8'})
    listaCardapio = JSON.parse(listaCardapio) 
    return listaCardapio
}

function cadastrarPizza(nome, preco, img){
   let listaCardapio = fs.readFileSync(db, {encoding:'utf-8'})
   listaCardapio = JSON.parse(listaCardapio)  
   listaCardapio.push({nome, preco, img})
   return fs.writeFileSync(db, JSON.stringify(listaCardapio))
}

function deletarPizza(index){
    let listaCardapio = fs.readFileSync(db, {encoding:'utf-8'})
    listaCardapio = JSON.parse(listaCardapio)   
     listaCardapio.splice(index, 1)

    // let listaAtualizada = listaCardapio.filter((pizza, posicao)=> posicao!=index)
    return fs.writeFileSync(db, JSON.stringify(listaCardapio))
}

module.exports = {listarCardapio, cadastrarPizza, deletarPizza}