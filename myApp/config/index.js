/*
 * @Author: tim
 * @Date: 2020-08-18 09:32:53
 * @LastEditors: tim
 * @LastEditTime: 2020-08-20 11:18:16
 * @Description: 
 */
const path = require("path");

const config = {
  projectName: 'myApp',
  date: '2020-8-18',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  // outputRoot: 'dist',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
  },
  alias: {
    "@actions": path.resolve(__dirname, "..", "src/actions"),
    "@assets": path.resolve(__dirname, "..", "src/assets"),
    "@components": path.resolve(__dirname, "..", "src/components"),
    "@constants": path.resolve(__dirname, "..", "src/constants"),
    "@reducers": path.resolve(__dirname, "..", "src/reducers"),
    "@styles": path.resolve(__dirname, "..", "src/styles"),
    "@store": path.resolve(__dirname, "..", "src/store"),
    "@utils": path.resolve(__dirname, "..", "src/utils")
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义 Webpack 配置
    webpackChain: {},
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义 Webpack 配置
    webpackChain: {},
    devServer: {}
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
