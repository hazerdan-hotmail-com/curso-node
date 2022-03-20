
const fs = require('fs');
const colors = require('colors');
console.log(colors.red('hola'))

const CrearArchivo = async( factor = 5,listar,hasta) =>{
    try{    
        const archivo = `./salidas/Tabla-del-${factor}.txt`;
        let salida = '';
        for (let numero = 1; numero <= hasta; numero++) {
            salida += colors.red(factor)+(`${' x'.green} ${numero}  = ${numero * factor} \r\n`)
        };

        if( listar ){
            console.log ('======================'.blue);
            console.log (`  Tabla del ${factor}  ` );
            console.log ('======================'.blue.underline);
            console.log(salida);
        }
        fs.writeFileSync(archivo, salida);
        return (archivo);
    }catch (err){
        throw ( err )

    }
}

module.exports = {
    CrearArchivo
};