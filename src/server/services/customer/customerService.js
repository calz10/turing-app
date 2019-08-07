// Initializes the `customer` service on path `/customer`
const createService = require('./customer.js')
const { customerHooks } = require('../../hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')

  const options = {
    paginate
  }

  // Initialize our service with any options it requires

  app.use('/seller/:id/message', {
    async find(id, params) {
      return Promise.resolve({
        id: 'wala',
        params
      })
    }
  })

  app.use('/login', {
    async find() {
      const customer = app.service('products')
      return await customer.login()
    }
  })

  app.use('/customer', createService(options))
  // Get our initialized service so that we can register hooks
  const service = app.service('customer')

  service.hooks(customerHooks)
}
