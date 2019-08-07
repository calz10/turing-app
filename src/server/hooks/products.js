const validParams = [
  'query_string',
  'limit',
  'page',
  'description_length',
  'all_words'
]

module.exports = {
  before: {
    all: [],
    find: [
      context => {
        const keys = Object.keys(context.params.query)
        if (keys.length) {
          const hasInvalidKeys = keys.some(
            item => !validParams.includes(item.trim().toLowerCase())
          )
          if (hasInvalidKeys) {
            return Promise.reject(
              new Error(`Valid params are [${validParams.toLocaleString()}]`)
            )
          }
        }
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
