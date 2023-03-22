/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
 Crea los métodos necesarios para permitir encender y apagar el auto. */

let auto = {
    //propiedades clave: valor;
    marca: "Fiat",
    modelo: "Palio",
    color: "Blanco",

    //metodos
    encender(){
        document.write(`El auto está encendido... <br>`);
    },
    apagar(){
        document.write(`El auto está apagado... <br>`);
    }
}