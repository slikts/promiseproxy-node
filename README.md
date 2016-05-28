[![view on npm](http://img.shields.io/npm/v/promiseproxy-node.svg)](https://www.npmjs.org/package/promiseproxy-node)

# Promisified Node.js API

[PromiseProxy](https://github.com/slikts/promiseproxy) with a [schema](schema.js) for the [Node.js API](https://nodejs.org/api/).

## Requirements

 * Node.js 6+

## Installation

```
npm install promiseproxy-node
```

## Usage

```js
// Promisify the global chrome object
const _chrome = require('promiseproxy-chrome')(chrome)
// Callback methods return promises when the callback parameter is null or undefined
_chrome.tabs.query(info).then(callback)
```

### Build

```
npm run build
```

#### Updating api.json

Use in console on each page of the Chrome API docs:
```js
localStorage.methods = JSON.stringify([...new Set((localStorage.methods ? JSON.parse(localStorage.methods) : []).concat($$('#toc a').map(x => x.textContent).filter(x => /callback/.test(x))))])
```

Copy contents of `localStorage.methods` to `api.json`.

### Test

```
npm install --only=dev
npm run test
```

## License

MIT
