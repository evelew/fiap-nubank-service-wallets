const db = require('./_db')

const createNew = async (data) => {
  const Wallet = db.Mongoose.model('wallets', db.WalletsSchema, 'wallets')
  const newWallet = new Wallet({
    name: data.name,
    cdi: data.cdi,
    vencimento: data.vencimento,
  })

  return newWallet
    .save()
    .then((wallet) => {
      return `Nova carteira "${wallet.name}" criada com sucesso!`
    })
    .catch((err) => err)
}

module.exports = createNew
