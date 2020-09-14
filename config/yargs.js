/* De esta forma puedo indicar comandos que serán pasados como parámetros a la aplicación
a la hora de ejecutarla
*/

const opts = {
    base: {
        demand: true, //Obligatorio
        alias: 'b' //Puedo indicar 'base' o 'b' 
    },
    limite: {
        alias: 'l',
        default: 10 //Si no se indica ningún valor, tomará el 10
    }
}

const argv = require('yargs') //En este caso 'yargs' es un paquete
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la multiplicación de la base hasta el límite', opts)
    .help() //Muestro los mensajes de ayuda al escribir 'app listar --help' por ejemplo
    .argv;

module.exports = {
    argv
}