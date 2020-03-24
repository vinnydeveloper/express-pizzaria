let pedidoController = {
    viewFormPedido:(req, res)=>{
        res.render('criarPedido')
    },
    criarPedido:(req, res)=>{
        res.render('sucessPedido', req.query)
    }
}

module.exports = pedidoController