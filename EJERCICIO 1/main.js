class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  CalcularSubtotal() {
    return (total = this.precio * this.cantidad);
  }
}

// 1
const Producto1 = new Producto("zapato", 300, 2); //se crea el pbjeto
localStorage.setItem("producto1", JSON.stringify(Producto1)); //se guarda en el local
// 2
const DatosGuardados = localStorage.getItem("producto1"); // se recupera del local
const ObjetoPlano = JSON.parse(DatosGuardados); // se devuelve de formato JSON al normal
