import Alumno from './models/alumno.js';
let alumno1 = new Alumno("Guille Levy" , "22888444", 20);
let alumno2 = new Alumno("Matias Queroso", "28946255", 51);
let alumno3 = new Alumno();

alumno3.username = "Elba Calao";
alumno3.dni = "32623391";
alumno3.edad = 9;
console.clear();
console.log(alumno1);
console.log(alumno2);
console.log(alumno3.toString());