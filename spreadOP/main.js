'use strict'
//operador de propagacion
const myArray1 = [2,4,6,8,true,3.56,'maria',800,'2'];
let myArray2 = new Array('a','e','i','o','u');

myArray1.push(300,677);
//let result = myArray1.concat(myArray2);

let result = [...myArray1,...myArray2,78,82772];

console.log(...myArray1);


function print(parm1,parm2=0,parm3=0){
    console.log(`esto es una impresion de paramettros: ${parm1} ${parm2} ${parm3}`);
}

print(...myArray1);