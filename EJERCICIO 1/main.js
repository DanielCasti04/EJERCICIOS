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
const Producto1 = Producto("zapato", 300, 2);
localStorage.setItem("producto1", JSON.stringify(Producto1));
