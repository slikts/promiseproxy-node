'use strict'

const {readFileSync} = require('fs')

const data = JSON.parse(readFileSync('api.json'))

const include = ['crypto', 'dns', 'fs', 'cluster', 'http', 'https', 'tls', 'dgram', 'zlib']

const flat = data.map(x => x.split('('))
.map(([x, y]) => [x.split('.'), y.split(',')])
.filter(([[x]]) => include.includes(x))
.map(([x, y]) => [x, y.findIndex(q => /callback/.test(q))])

const dupes = flat.map(([x, y]) => [x.join('.'), y])
.filter(([x, y], _, arr) => arr.filter(([q]) => x === q).length > 1)
.filter(([x, y], _, arr) => new Set(arr.filter(([q]) => x === q).map(([_, q]) => q)).size > 1)

if (dupes.length) {
  console.error('duplicates excluded', dupes)
}

const schema = {}

flat.filter(([x]) => !dupes.map(([q]) => q).includes(x.join('.')))
.forEach(([path, index]) => path.reduce((obj, key, i, arr) => {
  const last = i === arr.length - 1
  return obj[key] = last ? index : (obj[key] || {})
}, schema))

const formatted = JSON.stringify(schema, null, 2).replace(/"/g, '')
console.log(`/* Generated from api.json */
module.exports = ${formatted}`)
