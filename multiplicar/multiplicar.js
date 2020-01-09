/*
 * Requireds
 */
const fs = require('fs');
const colors = require('colors');

let data = '';


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base "${base}" no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

let listarTabla = (base, limite) => {
    console.log(`===============================`.green);
    console.log(`\t Tabla de ${base}`.green);
    console.log(`===============================`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}
module.exports = { crearArchivo, listarTabla };