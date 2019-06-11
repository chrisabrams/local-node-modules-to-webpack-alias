const path = require('path')

class ResolveLocalNodeModulesToWebpackAlias {

  constructor(options) {
    this.options = options
  }

  apply(compiler) {

    const aliases = {}
    const nodeModules = this.options.nodeModules || []
    const nodeModulesPath = this.options.nodeModulesPath

    for(let i = 0, l = nodeModules.length; i < l; i++) {
      const nodeModule = nodeModules[i]
  
      aliases[nodeModule] = path.resolve(nodeModulesPath, nodeModule)
    }

    compiler.options.resolve.alias = {
      ...compiler.options.resolve.alias,
      ...aliases,
    }
    
  }
}

module.exports = ResolveLocalNodeModulesToWebpackAlias
