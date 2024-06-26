/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {}
  }

  async find(params) {
    return [1,2,3]
  }

  async get(id, params) {
    return {
      id,
      params,
      text: `A new message with ID: ${id}!`
    }
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)))
    }

    return data
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
