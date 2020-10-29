const path = require('path');

console.log('File Name: ', path.basename(__filename))
console.log('Dir Name v1: ', path.dirname(__filename))
console.log('Dir Name v2: ', path.basename(__dirname))
console.log('Ext File: ', path.extname(__filename))
console.log('Parse: ', path.parse(__filename))
console.log('Parse name.ext: ', path.parse(__filename).name + path.parse(__filename).ext)
console.log('Parse base: ', path.parse(__filename).base)

console.log(path.join(__dirname, 'server', 'index.html'));
