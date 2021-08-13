const getAll = require('./../repository/get-all')

module.exports = async () => {
  const wallets = await getAll()
  return wallets
}
