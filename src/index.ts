let producto1: string;
let producto2: string;
let producto3: string;
let precioProducto1: number;
let precioProducto2: number;
let precioProducto3: number;
let stockProducto1: number;
let stockProducto2: number;
let stockProducto3: number;

function cargarProductos(): void {
  producto1 = prompt("Ingrese el primer producto");
  precioProducto1 = Number(prompt("Ingrese el precio del primer producto"));
  stockProducto1 = Number(prompt("Ingrese el stock del primer producto"));
  producto2 = prompt("Ingrese el segundo producto");
  precioProducto2 = Number(prompt("Ingrese el precio del segundo producto"));
  stockProducto2 = Number(prompt("Ingrese el stock del segudo producto"));
  producto3 = prompt("Ingrese el tercer producto");
  precioProducto3 = Number(prompt("Ingrese el precio de tercer producto"));
  stockProducto3 = Number(prompt("Ingrese el stock del tercer producto"));
}

cargarProductos();

console.log(
  "Bienvenidos al supermercado Torre del Este. Tenemos los siguientes productos para ofrecerle:",
  stockProducto1,
  producto1,
  "a $",
  precioProducto1,
  ",",
  stockProducto2,
  producto2,
  "a $",
  precioProducto2,
  ",",
  stockProducto3,
  producto3,
  "a $",
  precioProducto3,
  "."
);

function compra(cantidadProductos: number): void {
  cantidadProductos = Number(
    prompt("Ingrese la cantidad de productos que desea comprar")
  );
  while (cantidadProductos < 1) {
    cantidadProductos = Number(
      prompt("No puede adquirir menos de 1 producto.Ingrese otra cantidad")
    );
  }
  for (let i: number = 0; i < cantidadProductos; i++) {
    let productoElegido: number = Number(
      prompt(
        "Digite 1 para elegir el primer producto, 2 para elegir el segundo producto y 3 para elegir el tercer producto"
      )
    );
    let cantidadElegida: number = Number(
      prompt("Ingrese la cantidad del producto que quiere comprar")
    );
    while (productoElegido === 1 && stockProducto1 < 1) {
      productoElegido = Number(
        prompt("No hay stock del producto seleccionado, ingrese otro producto")
      );
      cantidadElegida = Number(prompt("Ingrese la cantidad deseada"));
    }
    while (productoElegido === 2 && stockProducto2 < 1) {
      productoElegido = Number(
        prompt("No hay stock del producto seleccionado, ingrese otro producto")
      );
      cantidadElegida = Number(prompt("Ingrese la cantidad deseada"));
    }
    while (productoElegido === 3 && stockProducto3 < 1) {
      productoElegido = Number(
        prompt("No hay stock del producto seleccionado, ingrese otro producto")
      );
      cantidadElegida = Number(prompt("Ingrese la cantidad deseada"));
    }
    if (productoElegido === 1 && stockProducto1 > 0) {
      console.log(
        "Usted compro",
        cantidadElegida,
        producto1,
        "a $",
        cantidadElegida * precioProducto1,
        "."
      );
      console.log(
        "Quedan",
        stockProducto1 - cantidadElegida,
        producto1,
        "en stock."
      );
    } else if (productoElegido === 2 && stockProducto2 > 0) {
      console.log(
        "Usted compro",
        cantidadElegida,
        producto2,
        "a $",
        cantidadElegida * precioProducto2,
        "."
      );
      console.log(
        "Quedan",
        stockProducto2 - cantidadElegida,
        producto2,
        "en stock"
      );
    } else if (productoElegido === 3 && stockProducto3 > 0) {
      console.log(
        "Usted compro",
        cantidadElegida,
        producto3,
        "a $",
        cantidadElegida * precioProducto3,
        "."
      );
      console.log(
        "Quedan",
        stockProducto3 - cantidadElegida,
        producto3,
        "en stock"
      );
    }
  }
}

compra();

console.log("Gracias por su compra.Vuelva a visitarnos.");
