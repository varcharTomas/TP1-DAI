import {PI, sumar, restar, multiplicar, dividir, numeros} from './modules/matematica.js';

let total, numero1 = 10, numero2 = 20

console.log(`PI vale aproximadamente '${PI}'`)
total = sumar(numero1, numero2)
console.log(`sumar(${numero1}, ${numero2}) = ${total}`)
total = restar(numero1, numero2)
console.log(`restar(${numero1}, ${numero2}) = ${total}`)
total = multiplicar(numero1, numero2)
console.log(`multiplicacion(${numero1}, ${numero2}) = ${total}`)
total = dividir(numero1, numero2)
console.log(`division(${numero1}, ${numero2}) = ${total}`)
console.log(numeros)

