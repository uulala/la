const path = require('path');

// console.log(process.env)
module.exports = {
    configureWebpack: config => {
        console.log('mode-----:', config.mode)
        // if (process.env.NODE_ENV === 'production') {
        //     // 为生产环境修改配置...
        // } else {
        //     // 为开发环境修改配置...
        // }

        return {
            // entry: './src/laUi/',
            resolve: {
                // 路径别名
                alias: {
                    '@': path.resolve('src'),
                    main: path.resolve(__dirname, 'src'),
                    packages: path.resolve(__dirname, 'packages'),
                    examples: path.resolve(__dirname, 'examples'),
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
}