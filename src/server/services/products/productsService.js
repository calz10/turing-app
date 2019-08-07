// Initializes the `buyer` service on path `/buyer`
const createService = require('./products.js')
const { productHooks } = require('../../hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')

  const options = {
    paginate
  }

  app.use('/products', createService(options))
  const service = app.service('products')

  service.hooks(productHooks)
}
