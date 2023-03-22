/** 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

let cuenta = {
    //propiedades clave: valor;
    titular: "Alex",
    saldo: 0,

    //metodos
    ingresar(cantidad) {
        document.write("Ingresar saldo: ");
    },
    extraer(cantidad) {
        document.write("Extraer saldo: ");
    },
    informar() {
        document.write(`Estado de la cuenta:<br>Titular: ${this.titular}<br>Saldo: ${this.saldo}`);
    }

}