// Creo un array vacío donde voy a almacenar los productos que selecciona el usuario.

let carritoCompras = []; 

// Creo mi constructor de objetos

class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = precio;
        this.descripcion = descripcion;
    }
}

//Creo mi array de objetos con los distintos productos disponibles.

const productos = [
    new Producto("Asesoria Express", 100000, "Asesoria Express con detalles mínimos."),
    new Producto("Asesoria Intermedia", 150000, "Asesoria intermedia con detalles y renders."),
    new Producto("Asesoria Integral", 250000, "Asesoria integral con detalles y renders, presupuesto y guia de compras."),
    new Producto("Curso de SketchUP", 50000, "Curso de SketchUp para interiores."),
    new Producto("Ebook de estilos", 10000, "Guia completa de los distintos estilos del interiorismo."),
    new Producto("Ebook sobre cocinas", 25000, "Todo lo que tenes que saber sobre las refacciones de cocinas."),
];

// Creo la función para agregar producto al carrito de compras.

function agregarAlCarrito(eleccion) {
    let opcion = parseInt(eleccion)
while(opcion !== 7){
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length){
        alert("Opción no válida. Seleccione un producto válido.");
    }else if (opcion == 1){
        carritoCompras.push(productos[opcion - 1]);
        alert(`Agregaste ${productos[opcion - 1].nombre} al carrito.`);
    }else if (opcion == 2){
        carritoCompras.push(productos[opcion - 1]);
        alert(`Agregaste ${productos[opcion - 1].nombre} al carrito.`);
    }else if (opcion == 3){
        carritoCompras.push(productos[opcion - 1]);
        alert(`Agregaste ${productos[opcion - 1].nombre} al carrito.`);
    }else if (opcion == 4){
        carritoCompras.push(productos[opcion - 1]);
        alert(`Agregaste ${productos[opcion - 1].nombre} al carrito.`);
    }else if (opcion == 5){
        carritoCompras.push(productos[opcion - 1]);
        alert(`Agregaste ${productos[opcion - 1].nombre} al carrito.`);
    }else if (opcion == 6){
        carritoCompras.push(productos[opcion - 1]);
        alert(`Agregaste ${productos[opcion - 1].nombre} al carrito.`);
    }else {
        alert("No agregaste nada.");
    }
    opcion = parseInt(prompt(
        `\n Elegí que producto queres:
        \n 1- ${productos[0].nombre} y el precio es de: $${productos[0].precio}
        \n 2- ${productos[1].nombre} y el precio es de: $${productos[1].precio}
        \n 3- ${productos[2].nombre} y el precio es de: $${productos[2].precio}
        \n 4- ${productos[3].nombre} y el precio es de: $${productos[3].precio}
        \n 5- ${productos[4].nombre} y el precio es de: $${productos[4].precio}
        \n 6- ${productos[5].nombre} y el precio es de: $${productos[5].precio}
        \n 7- Mostrar carrito`));  
}
}

// Creo la funcion para mostrar el carrito de compras.

function mostrarCarrito() {
    if (carritoCompras.length === 0) {
    alert("El carrito está vacío.");
    } else {
    const mensaje = carritoCompras.map((producto) => 
        `${producto.nombre}\n- Precio: $${producto.precio}\n- Descripción: ${producto.descripcion}`
    ).join('\n\n');

    alert(`Tu carrito de compras contiene:\n${mensaje}`);
    }
}

//Creo la funcion para filtrar los productos agregados al carrito de compras.

function filtrarProductos(palabra){
        let busqueda = palabra.toUpperCase()
    if (busqueda === "SALIR"){
        alert("Saliste de tu carrito de compras!");
    } else {
        const filtro = carritoCompras.filter((productos) => productos.nombre.includes(busqueda));
        console.log(filtro)
    }
}

//Llamo a la funcion para agregar productos al carrito de compras.

agregarAlCarrito(prompt(
    `\n Elegí que producto queres:
        \n 1- ${productos[0].nombre} y el precio es de: $${productos[0].precio}
        \n 2- ${productos[1].nombre} y el precio es de: $${productos[1].precio}
        \n 3- ${productos[2].nombre} y el precio es de: $${productos[2].precio}
        \n 4- ${productos[3].nombre} y el precio es de: $${productos[3].precio}
        \n 5- ${productos[4].nombre} y el precio es de: $${productos[4].precio}
        \n 6- ${productos[5].nombre} y el precio es de: $${productos[5].precio}
        \n 7- Mostrar carrito`)); 

//Llamo a la función para mostrar el carrito de compras.

mostrarCarrito()

// Llamo a la función para filtrar dentro de los productos agregados al carrito de compras.

filtrarProductos(prompt("Para filtrar tus productos agregados al carrito escribí:\n Asesoria, Ebook o Curso.\n Para abanondar el carrito escribi: Salir"));
