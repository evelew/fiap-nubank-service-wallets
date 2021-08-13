const getAll = require('./../services/get-all')
const createNew = require('./../services/create-new')
const update = require('./../services/update')

module.exports = (express) => {
  let api = express.Router()

  api.get('/wallet/get-all', async function (req, res) {
    const response = await getAll()
    res.send(response)
  })

  api.post('/wallet/create-new', async function (req, res) {
    const message = await createNew(req.body)
    res.send(message)
  })

  api.put('/wallet/update', async function (req, res) {
    const message = await update(req.body)
    res.send(message)
  })

  return api
}
