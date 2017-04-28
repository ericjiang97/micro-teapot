const {send} = require('micro')

module.exports = async (req, res) => {
  const statusCode = 418
  const data = { error: 'Teapot Detected! I guess you are a teapot' }

  send(res, statusCode, data)
}