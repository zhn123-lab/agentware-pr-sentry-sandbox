// Test fixture only - simple passing test
const assert = require('assert');
const { add, formatName } = require('../src/app');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(formatName('Ada', 'Lovelace'), 'Ada Lovelace');
console.log('All tests passed');
