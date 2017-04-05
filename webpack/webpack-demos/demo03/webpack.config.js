module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ]
  }
};


// module.exports = {
//   entry: 'abc.js',
//   output: {
//     filename: 'abccopy.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         loaderL 'babel-loader?'
//       }
//     ]
//   }
// }
