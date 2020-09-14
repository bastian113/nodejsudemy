//requireds
const fs = require('fs');
var colors = require('colors/safe');

let listarTabla = (base, limite) => {

    console.log('=================='.yellow);
    console.log(`tabla de ${base}`.yellow);
    console.log('=================='.yellow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => { // limite = 10, en caso de llegar nulo toma el valor 10 por defecto

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}