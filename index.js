const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const getAll = require('./repository/get-all')
const createNew = require('./repository/create-new')
const update = require('./repository/update')

app.get('/wallet/get-all', async function (req, res) {
  const wallets = await getAll()
  res.send(wallets)
})

app.post('/wallet/create-new', async function (req, res) {
  const message = await createNew(req.body)
  res.send(message)
})

app.put('/wallet/update', async function (req, res) {
  const message = await update(req.body)
  res.send(message)
})

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
