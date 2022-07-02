const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid }

    jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, {
      expiresIn: '4h'
    }, (err, token) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      if (err) reject('No se pudo generar el token')
      resolve(token)
    })
  })
}

module.exports = {
  generarJWT
}
