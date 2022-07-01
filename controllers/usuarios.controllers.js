const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query

  res.json({
    q,
    nombre,
    apikey,
    msg: 'get API - controlador'
  })
}

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body

  res.json({
    nombre,
    edad
  })
}

const usuariosPut = (req, res = response) => {
  const id = req.params.id

  res.json({
    id,
    msg: 'put API - controlador'
  })
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador'
  })
}

module.exports = {
  usuariosDelete,
  usuariosGet,
  usuariosPost,
  usuariosPut
}
