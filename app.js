const argv = require('./config/yargs').argv;
var colors = require('colors/safe'); //importándolo con /safe se deben agregar los colores diferente y no solo string.green, ya que la vble string podría ser un objeto y contener un atributo green

/* Destructuración, de esta manera no tengo que llamar siempre "multiplicar.función",
sino que de una vez llamo a la función.

Además no es necesario colocar el .js al archivo al final ya que este se infiere.
*/
// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/* argv es un atributo del objeto process que está definido por defecto en node y almacena los datos que le 
son pasados como parámetro a la app cuando ejecuto un comando como por ejemplo "node app --base", esto lo que
hace es ejecutar el archivo llamado "app" y le pasa como parámetro "--base"
*/
//let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.yellow(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv.limite); //imprime el valor que se le indique a 'limite'
// let parametro = argv[2]; //En las posiciones 0 y 1 vienen valores de node por defecto.
// let base = parametro.split('=')[1];