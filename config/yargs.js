const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default:false,
        describe: 'Muestra la tabla por consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default:10,
        describe: 'Muestra la tabla por consola'
    })
    .check( (argv,options) =>{
        if( isNaN( argv.b )){
            throw 'la base tiene que ser un número'
        }
        return argv
    })
    .argv;

module.exports = argv;