const path = require('path');
var webpack = require('webpack')

console.log(path.resolve(__dirname,'../'))

module.exports = {
    resolve: {
        extensions: ['','.js'] //,'.coffee']
    },
  module: {
    
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: path.resolve(__dirname, '../')
      },
      { 
          test: /\.coffee$/,
          loader: 'coffee-loader', 
          exclude: /node_modules/, 
          include: path.resolve(__dirname, '../')
          
    }
    ]
  }
};
