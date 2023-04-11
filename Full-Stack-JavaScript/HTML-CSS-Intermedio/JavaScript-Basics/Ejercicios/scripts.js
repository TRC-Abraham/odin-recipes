// Nota: Deje los resultados sin comentar, para que resalte. Para probar el código se copia y pega en la consola del navegador.

// Exercise 1----------------------------------
/* **
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

/* function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = "a" + "b";

	// =================================

	return result;
} */

// Answer

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a + b;

	// =================================

	return result;
}


// Exercise 2----------------------------------
/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

/* number = Number(prompt("enter a number"));

function numberChecker() {
	if(number === 6) {
		return true;
	} else {
		return false;
	}
} */

// Answer
number = prompt("enter a number");
    if(number >= 10) {
		alert (true);
	} else {
		alert (false);
	}


// Exercise 3 

/**
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you. 
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 * 
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */

/* const a = "?"
const b = "?"
const c = "?"
const d = "?"
const e = "?"

module.exports = {a, b, c, d, e} */

// Answer

const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;

module.exports = {a, b, c, d, e};


//Exercise 4

/* Be sure to uncomment the items under each step below the editable section. Be sure to comment out the entire last step. If your code fails to run, or you see a "ReferenceError" in the console, make sure you have completed all of the objectives 
  
  Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  
  
	Step 1:
	 Take a look at this code and try to predict what it's going to do before running it...
	
	After making your guess, press 'run' at the top and take a look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.
	



	Step 2:
	Once you have a good handle on the code snippet, delete the code then follow the following instructions between the lines and try to recreate the snippet on your own.
	
	---------------------------------------------------------------
	
	4 variables: first name, last name, current year, and birth year.
	a 5th variable (greeting) that is constructed from the previous 4, it should contain a greeting with the person's full name and their age.
	print the greeting with console.log
	
	---------------------------------------------------------------
	
	Once you have your version of the code working let's go back over it and edit it to make it easier to read.  After each step, make sure to run the code to make sure the code still works! */

    /* const birthYear = 1948;
    const thisYear = 1965;
    const firstName = "Carlos";
    const lastName = "Stevenson";
    
    const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";
    
    console.log(greeting); */

// Answer

const anoNacimiento = 1994;
const anoActual = 2023;
const nombre = 'Abraham';
const apellido = 'Sanchez';

const saludo = '¡Hola! Mi nombre es ' + nombre + ' ' + apellido + ' y tengo ' + (anoActual - anoNacimiento) + ' anos';

console.log(saludo);

/* Step 3:
	Add 2 more variables: "fullName" and "age"

	Edit the greeting string to use fullName and age instead of doing the calculations in the string itself. (the greeting should look something like this: "Hello, my name is " + fullName)

	Do NOT simply type the full name and age into the new variables, but set them using the calculations that were originally being done in the greeting. */

// Answer

const anoNacimiento2 = 1994;
const anoActual2 = 2023;
const nombre2 = 'Abraham';
const apellido2 = 'Sanchez';
const fullName = nombre + ' ' + apellido;
const age = anoActual - anoNacimiento;

const saludo2 = '¡Hola! Mi nombre es ' + fullName + ' y tengo ' + age + ' anos';

console.log(saludo);

//--------------------------------------------------
function checkAge(age) {
	if (age > 18) {
	  return true;
	} else {
	  return confirm('Did parents allow you?');
	}
  }

function checkAge(age){
	return (age > 18) ? true : confirm('Did parents allow you?');
}

// -----------------------------------------

let numeroA = Number(prompt('Ingresa el primer numero: '));
let numeroB = Number(prompt('Ingresa el segundo numero: '));

function min(numeroA, numeroB){
	
	if (numeroA < numeroB){
		alert (numeroA + ' es menor a ' + numeroB);
	}else {
		alert (numeroA + ' es mayor a ' + numeroB);
	}
	return; 
}

//--------------------------------------------------

// Assignment
// Función 1 - Añadir
function add7(numero) {
	let numAdd;
	numAdd = numero + 7;
	console.log(numAdd);
}
// Función 2 - Multiplicar
function multiply(mult1, mult2) {
	let nummult;
	nummult = mult1 * mult2;
	console.log(nummult);
}
// Función 3 - Capitalizar
function capitalize(palabra) {
	let letraUno = palabra.charAt(0).toUpperCase();
	let letraDos = palabra.slice(1).toLowerCase();
	let palabraCap = letraUno + letraDos;
	console.log(palabraCap);
}
// Función 4 - Ultima letra
function lastLetter(palabra){
	let lastLett = palabra.slice(-1);
	console.log(lastLett);
}

//------------------------------------------------------

let answer = parseInt(prompt('Ingresa un numero para hacer FizzBuzz: '));

for (let i = 1; i <= answer; i++){
	if (i % 3 === 0){
		console.log(`${i} es Fizz`);
	} else if (i % 5 === 0) {
		console.log(`${i} es Buzz`);
	} else if (i % 3 === 0 && i % 5 === 0){
		console.log(`${i} es FizzBuzz`);
	} else {
		console.log(`${i} no es FizzBuzz =(`);
	}
}

// Nota para que ${} funcione, debe de estar encerrada ente `` de lo contrario l valor no se mostrar correctamente.