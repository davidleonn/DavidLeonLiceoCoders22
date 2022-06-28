// 1.Declare una función fullName e imprima su nombre completo.
const nombre1 = (function fullName1(){console.log ('David Leon');})()

//Misma función pero en versión arrow.
const nombre2 = () => {console.log('David Leo');};nombre2();
//Versión arrow 2
const nombre3 = () => console.log('David L');nombre3();


// 2.Declare una función fullName y ahora toma firstName, lastName como parámetro y devuelve su nombre completo.
function nombreCompleto(nombre, apellido){return nombre + ' ' + apellido};

//prueba función
const fullNameComplete = nombreCompleto('David' ,'Leon')
console.log(fullNameComplete)

//version arrow1
const nombreCompleto = (nombre, apellido) => { return nombre + ' ' + apellido}
//Versión arrow corta
const nombreCompleto = (nombre, apellido) => nombre + ' ' + apellido


// 3.Declare una función addNumbers y toma dos dos parámetros y devuelve suma.
function addNumbers(num1, num2){return num1 + num2}

//Prueba función
const suma = addNumbers(1, 2)
console.log(suma)

//arrow normal
const addNumbers = (num1, num2) => {return num1 + num2}

//arrow corta
const addNumbers = (num1, num2) => num1 + num2