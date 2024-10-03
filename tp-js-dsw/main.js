// INTRODUCCIÓN A JS

console.log("Introducción a JS")

// Ej2

let a = 5;
let b= 10;
let c= a+b;
console.log(`El resultado es: ${c}`);

// ej3

// let nombre = prompt("¿Cuál es tu nombre?");
// console.log(`Hola, ${nombre}!`);

// ---------------------------------------------------------------------------------------------

// ej1

let a1 = 1;
let b1= 2;
let c1= 3;

if(a1>b1 && a1>c1){
  console.log(`El mayor de los numeros es ${a1} `)
}else if(b1>a1 && b1>c1){
  console.log(`El mayor de los numeros es ${b1}`)
}else{
  console.log(`El mayor de los numeros es ${c1} `)
}

// ej2

// let numero1= prompt(`Ingrese un número para ver si este es par o impar`)

// if(numero1 %2==0){
//   console.log("El número ingresado es par")

// }else{
//   console.log("El número ingresado es impar")
// }

// -----------------------------------------------------------------------------------

// ej1

let aa=10

while (aa>0){
  aa--
  console.log(aa)
}

// ej2

// let bb;
// do{
//   bb= prompt(`Ingrese un número mayor a 100`)
// }while(bb<=100)

//   console.log(`El número ingresado es mayor a 100: ${bb}`)

// -------------------

// ej1

const esPar =(nroIngresado)=>{
  if (nroIngresado %2===0){
    return true
  }else{
    return false
  }
}

let nroPar = 8
let nroImpar = 7

console.log(`El número ${nroPar} es par?: ${esPar(nroPar)}`)
console.log(`El número ${nroImpar} es par?: ${esPar(nroImpar)}`)

// ej2

const converturCelsiusAFarenheit=(grados)=>{
  let calculo= grados *1.8+32
  console.log(`${grados}°C son equivalentes a ${calculo}°F`)
}

let gradosIngresados = prompt("Ingrese los grados en Celsius a convertir")
converturCelsiusAFarenheit(gradosIngresados)

// ------------------------------------




