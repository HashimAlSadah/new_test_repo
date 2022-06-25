const _ = require("lodash");

const myArray = [1, [2,[3, [4, [5]]]]];
const flattenedArray = _.flattenDeep(myArray);

console.log(flattenedArray);