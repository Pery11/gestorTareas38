const path = require('path');

module.exports = {
    entry: './src/index.js' //Punto de entrada de tu aplicación, este es un archivo de entrada para que webpack empiece a construir
    output: {
        filename:'bundle.js,'
        path: path.resolve(__dirname, dist 'dist') //Carpeta de salida 
    },
    module: {
        rules: [
            {
                test: /\.css$/ , 
                use: ['style-loader', 'cssloader'], //Loaders para procesar archivos
            },
            {
                test: /\.js$/, //Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para transpilar JS moderno a JS compatible con navegadores
                    options: {
                        presets:  ['@babel/preset-env'], //Preset de Babel para convertir JS moderno a versines mas antiguas
                    }
                }
            }
        ]
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde donde obtenemos los archivos que mostaramos al usuario
        compres: true, //Habilitando compresión gzip, reduce los tamaños de los archivos mejorando la carga
        port: 9000, //Puerto del servidor de desarrollo
    }
}