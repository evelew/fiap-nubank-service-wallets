const db = require('./_db')

const createNew = async ({ _id, value, name }) => {
  const Wallet = db.Mongoose.model('wallets', db.WalletsSchema, 'wallets')

  await Wallet.updateOne({ _id }, { value })

  return `Dinheiro guardado na carteira "${name}"!`
}

module.exports = createNew
