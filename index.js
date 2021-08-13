require('module-alias/register')

const express = require('express')
const app = express()
const port = 3000

const controller = require('@controller')(express)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', controller)

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
