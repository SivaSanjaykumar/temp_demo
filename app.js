const _ = require('lodash')

const arr = [1,[2,[3,4]]];

const newitems = _.flattenDeep(arr);

console.log(newitems); // Output: [1, 2, 3, 4]