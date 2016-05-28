'use strict'

const test = require('tape')

const NodePromiseProxy = require('../')

// fs.chmod(path, mode, callback)
const chmod = (a, b, callback) => setImmediate(() => callback(a, b))

const fs = NodePromiseProxy('fs')
fs.chmod = chmod

test('callback', function (t) {
  fs.chmod(1, 2, (a) => {
    t.equal(a, 1)
    t.end()
  })
})
test('promise', function (t) {
  fs.chmod(1, 2).then((a) => {
    t.equal(a, 1)
    t.end()
  })
})
test('unknown module throws', function (t) {
  t.throws(() => NodePromiseProxy('asd'))
  t.end()
})
