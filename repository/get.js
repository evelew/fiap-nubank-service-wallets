const db = require('./../_db')

const get = async (_id) => {
  const Wallet = db.Mongoose.model('wallets', db.WalletsSchema, 'wallets')
  const wallet = await Wallet.findOne({ _id }).exec()
  return wallet
}

module.exports = get
