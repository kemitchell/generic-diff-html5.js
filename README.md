```javascript
var assert = require('assert')
var html5 = require('generic-diff-html5')
var diff = require('generic-diff')

assert.equal(
  html5(diff('Hello, Jon. How are you?', 'Hello, Don. How are you?')),
  'Hello, <del>J</del><ins>D</ins>on. How are you?')
```
