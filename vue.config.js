const path = require('path');

console.log('23:',path.resolve(__dirname, './build/md-loader/index.js'))

module.exports = {
    configureWebpack: config => {
        console.log(config.mode)
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...

        } else {
            // 为开发环境修改配置...
            return {
                // entry: './src/laUi/',

                resolve: {
                    // 路径别名
                    alias: {
                        '@': path.resolve('src'),
                        main: path.resolve(__dirname, 'src/laUi'),
                        packages: path.resolve(__dirname, 'src/laUi/packages'),
                        examples: path.resolve(__dirname, 'src/laUi/examples'),
                    },
                },
                module: {
                    rules: [
                        {
                            test: /\.md$/,
                            use: [
                                {
                                    loader: 'vue-loader',
                                    options: {
                                        compilerOptions: {
                                            preserveWhitespace: false
                                        }
                                    }
                                },
                                {
                                    loader: path.resolve(__dirname, './build/md-loader/index.js')
                                }
                            ]
                        },
                    ]
                }
            }
        }
    },
}