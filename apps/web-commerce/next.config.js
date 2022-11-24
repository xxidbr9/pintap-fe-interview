const TerserPlugin = require('terser-webpack-plugin')
const isDEV = process.env.NODE_ENV !== 'production'

const config = {
  images: {
    domains: [
      'i.dummyjson.com',
    ],
  },
  reactStrictMode: true,

  webpack: config => {
    const newConfig = config

    newConfig.resolve.alias = {
      ...config.resolve.alias,
    }

    if (!isDEV) {
      newConfig.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ]
    }

    return newConfig
  },
}

module.exports = config
