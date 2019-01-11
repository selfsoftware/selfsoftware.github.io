const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: { //自动打包配置
        open: true, //自动打开页面
        // contentBase:'src',   // 设置打开页面的根目录
        port: 8080, //接口
        hot: true //启用热更新
    },
    plugins: [ //各类插件
        new webpack.HotModuleReplacementPlugin(), //启用热更新
        new htmlWebpackPlugin({ //使用template，找到内存化的页面，
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: { // 配置第三方模块的 加载器
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'scss-loader']
            },
            {
                test: /\.(jpg|jpeg|png|pic|gif|bmp)$/,
                use: 'url-loader'
            }, //url-图片的模块配置
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'url-loader'
            }, //字体图标的模块配置
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, //babel对ES6以上的高级语法转化
            {
                test: /\.vue$/,
                use: 'vue-loader',
				// options: vueLoaderConfig
            } //vue模块配置
        ]
    },
    resolve: {
        alias: { //设置包被导入是的路径
            // "vue$":"vue/dist/vue.js"
        }
    }

}