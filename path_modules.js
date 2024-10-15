const path = require('path');

console.log(path.sep);

const base = path.join('contents','subfolder','test.txt');
console.log(base);


const file = path.basename(base);
console.log(file);

const absolute = path.resolve(__dirname,'contents','subfolder','test.txt');

console.log(absolute);