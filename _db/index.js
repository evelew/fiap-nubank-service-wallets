const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo:27017/fiap_nubank_wallet')

const walletsSchema = new mongoose.Schema(
  {
    name: String,
    cdi: Number,
    due_date: String,
    value: Number,
  },
  { collection: 'wallets' }
)

module.exports = { Mongoose: mongoose, WalletsSchema: walletsSchema }
