const db = require('./../_db')

const createNew = async (data) => {
  const Wallet = db.Mongoose.model('wallets', db.WalletsSchema, 'wallets')

  console.log('dados recebidos: ', data)

  const { name, cdi, due_date, value } = data
  const newWallet = new Wallet({
    name,
    cdi,
    due_date,
    value,
  })

  return newWallet
    .save()
    .then((wallet) => {
      return `Nova carteira "${wallet.name}" criada com sucesso!`
    })
    .catch((err) => err)
}

module.exports = createNew
