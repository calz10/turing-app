/* eslint-disable no-unused-vars */
const axios = require('axios')
/**
 * class Service - a class for productService that holds the
 * functions that is available to query products either to
 * @example - update fetch etc
 */
class Service {
  /**
   * class constructor
   * @param {Object} options - options passed from instantiating the class
   */
  constructor(options) {
    /**
     * assigning property options of class value from parameter
     */
    this.options = options || {}
  }

  /**
   *
   * @param {*} params
   */
  async find({ query: params }) {
    const keys = Object.keys(params)
    if (keys.length) {
      const result = await axios.get(
        'https://backendapi.turing.com/products/search',
        {
          params
        }
      )
      if (result.data) {
        return result.data.rows
      }
      return []
    }

    const { data } = await axios('https://backendapi.turing.com/products')
    if (data && data.count) {
      return data.rows
    }
    return []
  }

  async get(id) {
    const { data } = await axios(`https://backendapi.turing.com/products/${id}`)
    if (data) {
      return data
    }
    return null
  }

  async update(id, data, params) {
    return data
  }

  async patch(id, data, params) {
    return data
  }

  async remove(id, params) {
    return { id }
  }
}

module.exports = function(options) {
  return new Service(options)
}

module.exports.Service = Service
