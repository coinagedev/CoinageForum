const clone = require('clone')

let db = {}

const defaultData = {
  categories: [
    {
      name: 'Coinage Crypto',
      path: 'Coinage Crypto',
    },
    {
      name: 'Market Analysis',
      path: 'Market Analysis',
    },
    {
      name: 'News Update',
      path: 'News update',
    }
  ]
}

function getData (token) {
  //Each token has it's own copy of the DB. The token in this case is like an
  // app id.
  let data = db[token]
  //This populates the default user categories if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll (token) {
  return new Promise((res) => {
    res(getData(token))
  })
}

module.exports = {
  getAll,
  defaultData,
}

