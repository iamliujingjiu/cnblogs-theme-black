const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,//压缩
        progress: true,
        open: true,
        hot: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: './assets/[name].[ext]'
                },
            },
            {
                test: /\.css$/,   // 正则表达式，表示.css后缀的文件
                use: ['style-loader','css-loader']   // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './src/default.htm',
            filename: 'default.htm',
            hash: true    
        }),
        new HtmlWebpackPlugin({
            template: './src/EntryList.htm',
            filename: 'EntryList.htm',
            hash: true    
        }),
        new HtmlWebpackPlugin({
            template: './src/GalleryThumbNailViewer.htm',
            filename: 'GalleryThumbNailViewer.htm',
            hash: true    
        }),
        new HtmlWebpackPlugin({
            template: './src/PostsList.htm',
            filename: 'PostsList.htm',
            hash: true    
        }),
        new HtmlWebpackPlugin({
            template: './src/PostsList2.htm',
            filename: 'PostsList2.htm',
            hash: true    
        }),
        new HtmlWebpackPlugin({
            template: './src/Profile.htm',
            filename: 'Profile.htm',
            hash: true    
        }),
        new HtmlWebpackPlugin({
            template: './src/ViewPost.htm',
            filename: 'ViewPost.htm',
            hash: true    
        })
    ]
};