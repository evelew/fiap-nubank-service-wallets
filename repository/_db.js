const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fiap_nubank_wallet')

const walletsSchema = new mongoose.Schema(
  {
    name: String,
    cdi: String,
    vencimento: String,
  },
  { collection: 'wallets' }
)

module.exports = { Mongoose: mongoose, WalletsSchema: walletsSchema }
