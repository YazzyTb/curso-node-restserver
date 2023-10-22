const { response,request } = require('express')


const usuariosGet = (req = request, res = response) => {
  
  const {q, nombre = 'No name', apikey,page=1, limit } = req.query;


    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    })
  }


 const usuariosPut = (req, res = response) => {

   const {id} = req.params.id


    res.json({
        msg: 'put API - usuariosPut'
    })
  }

  const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        body
    })
  }


  const usuariosDelete = (req, res = responsive) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    })
  }

  const usuariosPatch =(req, res = response) => {
    res.json({
        msg: 'patch API'
    })
  }

  module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
  }