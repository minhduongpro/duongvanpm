const path = require('path');

console.log(path)
console.log(path.resolve)
console.log(path.resolve('src/index.js'))
console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve('src/index.js')
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
    },
};