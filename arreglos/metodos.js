'use strict'

let cadena="enero-febrero-marzo-abril-mayo-junio-julio";
const myArray1 = [2,4,6,8,true,3.56,'maria',800,'2'];
//metodo split
let resultArray=cadena.split('-');
console.log(resultArray);

//metodo find
let resul = myArray1.find((e)=>e==="4");
console.log(result);

//metodo findIndex
result = myArray1.findIndex((e)=> e % 2 === 0);
