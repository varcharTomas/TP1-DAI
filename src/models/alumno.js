export default class Alumno {
    constructor(Username, DNI, Edad) { 
    this.username = Username
    this.dni = DNI
    this.edad = Edad
    }
    toString() {
        return `Username:${this.username}, DNI:${this.dni}, edad:${this.edad}`
    }
}