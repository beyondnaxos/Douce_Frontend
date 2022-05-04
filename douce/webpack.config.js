import NodePolyfillPlugin from "node-polyfill-webpack-plugin"

const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

export const plugins = [
    new NodePolyfillPlugin()
]