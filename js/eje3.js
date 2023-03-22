/**3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho,
 mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

 class Rectangulos {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;

    }

    cambiarAlto(nuevoAlto){
        this.alto = nuevoAlto;
    }

    cambiarAncho(nuevoAncho){
        this.ancho = nuevoAncho;
    }

    perimetro(){
        return 2 * (this.ancho + this.alto);
    }

    propiedades(){
        console.log(`El ancho es: ${this.ancho} y el alto es: ${this.ancho}`);
    }

    area(){
        return this.alto * this.ancho;
    }
 }