const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        server: './src/server.ts',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
        plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.json"})]
    },
};