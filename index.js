const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const controller = require('./controller')(express)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/', controller)

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
