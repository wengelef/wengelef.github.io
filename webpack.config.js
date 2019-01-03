const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const GoogleFontsPlugin = require('google-fonts-webpack-plugin')

module.exports = {
  "entry": "index.js",

  plugins: [
    new VuetifyLoaderPlugin(),
    new GoogleFontsPlugin({
      fonts: [
        { family: "Roboto", variants: [ "400" ] }
      ]
    ),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
	use: ['style-loader', 'css-loader'],
      },
    ],
  },

  module: {
    rules: [
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use 'url=loader?limit=25000' }
    ]
  },
};

