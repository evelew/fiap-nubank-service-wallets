const update = require('./../repository/update')
const get = require('./../repository/get')

module.exports = async (body) => {
  const { _id } = body
  const wallet = await get(_id)

  const total = Number(wallet.value) + Number(body.value)
  const message = await update({ _id, value: total, name: wallet.name })

  return message
}
