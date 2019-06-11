# local-node-modules-to-webpack-alias
Webpack plugin to alias the local version of a given list of node modules.

## Installation

    yarn add local-node-modules-to-webpack-alias --dev

    or

    npm install local-node-modules-to-webpack-alias -D

## Usage

    const ResolveLocalNodeModules = require('local-node-modules-to-webpack-alias')

    // Within Webpack config
    plugins: [
      new ResolveLocalNodeModules({
        nodeModulesPath: path.resolve(__dirname, 'node_modules'),
        nodeModules: ['styled-components'] // List node modules you want to resolve to the local version of your app
      }),
    ]
