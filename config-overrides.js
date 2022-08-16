const { override, addWebpackAlias, addWebpackPlugin, addWebpackResolve } = require('customize-cra')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = override(
  // clean web3 warn
  (config) => {
    config.ignoreWarnings = [/Failed to parse source map/]
    return config
  },
  // 打包进度条
  addWebpackPlugin(new ProgressBarPlugin()),
  // alias
  addWebpackAlias({
    // 加载模块的时候，可以使用“@”符号来进行简写啦~
    '@': path.resolve(__dirname, './src/'),
  }),
  // debug web3
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
  ),
  // debug web3
  addWebpackResolve({
    fallback: {
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url'),
    },
  }),
  // 添加打包变量
  addWebpackPlugin(new webpack.DefinePlugin({ __BUILD_TIME__: Date.now() })),
  // 注意是production环境启动该plugin
  process.env.NODE_ENV === 'production' &&
    addWebpackPlugin(
      new UglifyJsPlugin({
        // 开启打包缓存
        cache: true,
        // 开启多线程打包
        parallel: true,
        uglifyOptions: {
          // 删除警告
          warnings: false,
          // 压缩
          compress: {
            // 移除console
            drop_console: true,
            // 移除debugger
            drop_debugger: true,
          },
        },
      }),
    ),
  // 判断环境变量ANALYZER参数的值
  process.env.ANALYZER && addWebpackPlugin(new BundleAnalyzerPlugin()),
)
