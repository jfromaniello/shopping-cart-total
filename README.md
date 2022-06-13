This is an example node.js module. Do not use.

## Installation

```
npm i shopping-cart-total
```

## Usage

```js
const { getTotal } = require("shopping-cart-total");

const total = getTotal([
  { price: 10, quantity: 1 },
  { price: 20, quantity: 2 },
]);

console.log(total);

// shows 50
```

## License

MIT 2022 - JOSE
