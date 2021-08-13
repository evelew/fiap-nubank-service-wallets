const db = require('./_db')

const createNew = async (data) => {
  const Wallet = db.Mongoose.model('wallets', db.WalletsSchema, 'wallets')
  const { _id, value } = data

  const wallet = await Wallet.findOne({ _id }).exec()
  const { value: currentValue, name } = wallet

  const total = Number(currentValue) + Number(value)

  await Wallet.updateOne({ _id }, { value: total })

  return `Dinheiro guardado na carteira "${name}"!`
}

module.exports = createNew
