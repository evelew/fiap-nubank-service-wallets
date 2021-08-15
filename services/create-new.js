const axios = require('axios')

const createNew = require('./../repository/create-new')

module.exports = (body) => {
  axios
    .get(`http://localhost:3001/income/get/${body.cdi}`)
    .then(async (res) => {
      const income = res.data

      const data = {
        name: body.name,
        value: body.value,
        cdi: income.cdi_percentage,
        due_date: income.due_date,
      }

      const message = await createNew(data)
      return message
    })
    .catch((err) => console.error(err))
}
