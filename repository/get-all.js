require('module-alias/register')
const db = require('@db')

const getAll = async () => {
  const Wallets = db.Mongoose.model('wallets', db.WalletsSchema, 'wallets')
  const docs = await Wallets.find({}).lean().exec()
  return docs
}

module.exports = getAll
