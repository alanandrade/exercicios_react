const webpack = require("webpack")

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public', //(__dirname) é uma variavel global do NODE, que representa o diretorio atual
        filename: './bundle.js', //Nome do arquivo de saida
    },

    //Servidor que irá abrir o local onde possui o arquivo de saida
    devServer: {
        port: 8080,
        contentBase: './public',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'] //Consegue importar arquivos em colocar extensao, pode inserir outras extensoes
    },

    module: {
        loaders: [{
            test: /.jsx?$/, //Verefica a extensao deste arquivo com está expressão regular
            loader: 'babel-loader', //Babel, que irá compilar o nosso código para funcionar em todos os browsers o ES(EcmaScript).
            exclude: /node_modules/, //Não irá fazer alterações nas dependências
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}