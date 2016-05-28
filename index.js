const {PromiseProxy} = require('promiseproxy')

const schema = require('./schema')

const NodePromiseProxy = module => {
  if (module in schema) {
    return PromiseProxy(require(module), schema[module])
  }
  throw TypeError(`Unknown module: ${module}`)
}

module.exports = NodePromiseProxy
