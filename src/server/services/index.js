const products = require('./products/productsService.js')
const customer = require('./customer/customerService.js')
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(products)
  app.configure(customer)
}
