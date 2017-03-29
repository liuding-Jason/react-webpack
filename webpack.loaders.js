
/*
* Discribe : This file is used to config the loaders which is used in our program
* Author : liuding  Date ： 2017-02-27
* @copyRight : liuding-json
*/
module.exports = [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }*/

      {
        test: /\.css$/,
        loader: 'style!css'//添加对样式表的处理
      },
      /*{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },*/
      {
        test: /\.(woff|woff2)$/,
        loader: "url?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=10000&name=[path][name]_[sha512:hash:base64:7].[ext]' 
      },

      /*{
        test: /\.css$/,
        loader: 'style!css?modules'//跟前面相比就在后面加上了?modules 感叹号的作用在于使同一文件能够使用不同类型的loader
      },*/
      /*{
        test: /\.gif/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=10000&mimetype=image/svg"
      }*/
];