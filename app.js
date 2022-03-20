


console.clear ( );

const { CrearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
const colorss = require('colors/safe');


// const [,,arg3='base=5'] = process.argv;
// const [,base = 5 ] = arg3.split('=')


// console.log(process.argv);
// console.log( argv );
console.log( 'Base según Yargs:'.green, colorss.red(argv.base));
console.log( 'Listar según Yargs:'.green, argv.l);
console.log( 'Hasta según Yargs:'.green, argv.h);

// const factor = 5;
CrearArchivo(argv.base,argv.listar,argv.hasta)
    .then( nombreArchivo => console.log( nombreArchivo,'creado'))
    .catch( err => console.log(err));

