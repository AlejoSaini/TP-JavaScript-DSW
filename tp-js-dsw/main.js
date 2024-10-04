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

// const converturCelsiusAFarenheit=(grados)=>{
//   let calculo= grados *1.8+32
//   console.log(`${grados}°C son equivalentes a ${calculo}°F`)
// }

// let gradosIngresados = prompt("Ingrese los grados en Celsius a convertir")
// converturCelsiusAFarenheit(gradosIngresados)

// ------------------------------------

// ej1

let persona ={
  nombre: "Ana",
  edad:20,
  ciudad:"Madrid",

  cambiarCiudad: function(nuevaCiudad){
    this.ciudad=nuevaCiudad
  }
}
persona.cambiarCiudad("Barcelona")

// ej2

let libro ={
  titulo:"El Quijote",
  autor:"Cervantes",
  anio: 1605,
  esAntiguo: function() {
    let anioActual = new Date().getFullYear;
    let diferencia = anioActual - this.anio;
    
    if (diferencia > 10) {
        console.log(`El libro "${this.titulo}" es antiguo: ${false}`);
    } else {
        console.log(`El libro "${this.titulo}" es antiguo: ${true}`);
    }
}
}
libro.esAntiguo();

// ---------------------------------------------

// ej1

let numeros=[1,2,3,4,5,6,7,8,9,10]

let numerosDuplicados=numeros.map((num)=>{
  return num *2
})
console.log(`Números originales: ${numeros}`);
console.log(`Números multiplicados por 2: ${numerosDuplicados}`);

// ej2

let pares=[]
for(let i=1; i<=20; i++){
  if(esPar(i)){
    pares.push(i)
  }
}
console.log(`Primeros 10 números pares: ${pares}`);

// ------------------------------------------------------

// ej1

let button = document.getElementById("buttonColor");
let text = document.getElementById("pText")
const handleButton = () =>{
  if(button.classList.contains('buttonBlue')){
      button.classList.remove('buttonBlue')
      button.classList.add('buttonBlack')
  } else {
    button.classList.remove('buttonBlack')
    button.classList.add('buttonBlue')
  }
};
const handleText = () =>{
  if(text.classList.contains('textBlue')){
      text.classList.remove('textBlue')
  } else {
    text.classList.add('textBlue')
  }
}
button.addEventListener("click", () =>{
  handleButton()
  handleText()
});

// ej2

let buttonForm = document.getElementById("buttonForm");
buttonForm.addEventListener("click", () =>{
  let inputForm = document.getElementById("inputForm").value;
  alert(`Has ingresado: ${inputForm}`)
})

// ---------------------------------------------------------------------------------------------

// ej1

const liElements = document.querySelectorAll("li");
liElements.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.textContent)
  })
})

// ej2

const input = document.getElementById("input")
const disabledbutton = document.getElementById("disabledButton")
const enabledButton = document.getElementById("enabledButton")
disabledbutton.addEventListener('click', () => {
    input.disabled = true
    disabledbutton.disabled = true
    enabledButton.disabled = false
});
enabledButton.addEventListener('click', () => {
    input.disabled = false
    enabledButton.disabled = true
    disabledbutton.disabled = false
});
enabledButton.disabled = true

// ---------------------------------------------------------------------------------------------

// ej1

let buttonEmail = document.getElementById("buttonEmail")
buttonEmail.addEventListener(("click"), ()=>{
  let inputEmail = document.getElementById("inputEmail").value
  localStorage.setItem("correo", JSON.stringify(inputEmail))
});

const renderEmail = () => {
  const result = localStorage.getItem("correo")
  console.log("LOCAL STORAGE");
  if(result){
      console.log(JSON.parse(result))
  } else {
      console.log("Los datos no existen en el LocalStorage")
  }
  if (result !== null){
    (document.getElementById("savedEmail")).innerHTML = `
    <p>
      Correo guardado: ${JSON.parse(result)}
    </p>
    <button id="buttonDelete" class="buttonBlack">
      Eliminar Correo Guardado
    </button> 
    `
  }
}
renderEmail();

let buttonDelete = document.getElementById("buttonDelete")
buttonDelete.addEventListener(("click"), () =>{
  localStorage.clear()
  console.log('LocalStorage ha sido eliminado.')
})