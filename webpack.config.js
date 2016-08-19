var webpack = require('webpack');
var path = require('path');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry : {
//        entry1 : './entry/entry1.js',
        entry2 : './js/entry2.js'
    },
    output : {
        path : path.resolve(__dirname,'./assents'),
        filename : '[name].js'
    },
//    plugins : [commonsPlugin],
    module:{
        loaders : [
            { 
                test : /\.js$/,
                loader : 'babel-loader',
                exclude:/node_modules/,
                query : {
                    presets : ['es2015','react']
                }
            },
            {
                test : /\.jsx$/,
                loader : 'babel-loader!jsx-loader?harmony',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015','react']
                } 
           }   
        ]
    },
    resolve : {
        extensions:["",".js",".json"]
    }
}
