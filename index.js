const express = require('express')
const app = express()
const port = 3000

app.get('/wallet/get-all', async function (req, res) {
  const wallets = await getAll()
  res.send(wallets)
})

app.post('/wallet/create-new', function (req, res) {
  res.send('create new wallet')
})

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
