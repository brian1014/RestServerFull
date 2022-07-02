const { response } = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')
const { generarJWT } = require('../helpers/generarJWT')

const login = async (req, res = response) => {
  const { correo, password } = req.body

  try {
    const usuario = await Usuario.findOne({ correo })

    if (!usuario || !usuario.estado) {
      return res.status(400).json({
        msg: 'Usuario/password no son correctos'
      })
    }

    const validPassword = bcryptjs.compareSync(password, usuario.password)
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario/password no son correctos'
      })
    }

    const token = await generarJWT(usuario.id)

    res.json({
      usuario,
      token
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      msg: 'Hable con el administrador'
    })
  }
}

module.exports = {
  login
}
