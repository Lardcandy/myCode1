const path = require('path')

// 在内存中生成html页面的插件
// 只要是插件都要放在plugins里面
const htmlWebpackPlugins = require('html-webpack-plugin')


// 这个配置文件，其实就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
    // mode:'development',
    //配置入口 出口
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugins({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
    ],
    module:{ // 这个节点用于配置所有第三方模块加载器
        rules:[
            //所有第三方模块的匹配规则
            {test:/\.css$/, use:['style-loader','css-loader']}, //配置处理.css文件的第三方loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=26643&name=[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            //babel
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        ],
    }
}