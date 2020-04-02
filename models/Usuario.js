const path = require('path');
const fs = require('fs')

const db = path.join('usuarios.json')

function cadastrarUsuario(nome, email, senha){
    let novoUsuario = {
        nome, email, senha
    }

    let listaDeUsuarios = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}))

    listaDeUsuarios.push(novoUsuario);
    fs.writeFileSync(db, JSON.stringify(listaDeUsuarios))

    return true

}

function buscarUsuario(email){
    let listaDeUsuarios = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}))
    
    let [usuario] = listaDeUsuarios.filter((usuario, index)=>{
        return usuario.email == email
    })

    return usuario
}

module.exports = {cadastrarUsuario, buscarUsuario}