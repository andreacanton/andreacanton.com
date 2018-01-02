const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const package = require('./package.json');
const owner = require('./data/owner.json');
const _ = require('lodash');

module.exports = {
  entry: {
    body: './index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: _.join([owner.name, owner.surname], ' ') + ' | personal website'
     }),
     new GoogleFontsPlugin({
			fonts: [
				{ family: "Source Sans Pro" },
				{ family: "Roboto", variants: [ "400","700","900" ] }
			]
		 })
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
      }
     ]
   }
};
