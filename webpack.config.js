const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with the path to your app's entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Replace with the path to your app's build directory
  },
  resolve: {
    fallback: {
      // "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser")
    },
    extensions: ['.js', '.jsx'] // Add other extensions if needed
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};