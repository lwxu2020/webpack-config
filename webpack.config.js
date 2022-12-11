const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let mode = "development";
let target = "web";

const path = require('path');

if (process.env.NODE_ENV === "production") {
    mode = "production";
}
console.log("process.env.NODE_ENV = " + process.env.NODE_ENV);

module.exports = {
    mode: mode,
    target: target,

    entry: path.resolve(__dirname, 'src/index.js'),
    // entry: './src/index.js',
    
    devtool: "source-map",

    devServer: {
        static: { 
            directory: path.resolve(__dirname, "dist") 
        },
        compress: true,
        port: 8080,
        open: false,
        hot: true,
        historyApiFallback: true
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        // path: path.join(__dirname, '/dist'),
        publicPath: '/dist',
        filename: 'main.js',
        assetModuleFilename: '[name][ext]',
        // filename: 'bundle.js'
        clean: true,
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({
            title: 'Webpack Project',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        // new BundleAnalyzerPlugin(),
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
            },

            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.jsx?$/i,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                        // presets: ['@babel/preset-env', '@babel/preset-react']
                   }
                }
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ]
    }
}