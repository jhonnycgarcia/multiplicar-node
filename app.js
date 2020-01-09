/* 
 * Requireds
 */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs-config').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`El comando "${comando}", no es reconocido`);
        break;
}