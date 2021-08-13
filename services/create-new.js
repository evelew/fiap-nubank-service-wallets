const createNew = require('./../repository/create-new')

module.exports = async (body) => {
  const message = await createNew(body)
  return message
}
