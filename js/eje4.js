/**4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio,
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprime(){
        console.log(`Codigo: ${this.codigo}<br> Nombre: ${this.nombre}<br> Precio: ${this.precio}`);
    }
}

//instancias

let producto1 = new Producto('AAA', 'Producto1', '1000');
let producto2 = new Producto('BBB', 'Producto2', '3000');
let producto3 = new Producto('CCC', 'Producto3', '2500');

//array
let productos = [producto1, producto2, producto3];

//imprimir

