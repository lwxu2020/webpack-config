let mode = "development";
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    entry: './src/index.js',
    
    devtool: "source-map",

    devServer: {
        static: { 
            directory: path.join(__dirname, "/dist") 
        },
        compress: true,
        port: 8080
    },

    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/dist',
        filename: 'main.js'        
        // filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [

            {
                test: /.js$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                        // presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}