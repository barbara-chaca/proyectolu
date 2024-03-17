document.addEventListener('DOMContentLoaded', function() {
    // Definir constructor para Producto
    function Producto(nombre, precio, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
    }

    // Crear productos
    const productos = [
        new Producto('Kingdomino', 1500, 'juego'),
        new Producto('Burako', 1800, 'juego'),
        new Producto('Catan', 2000, 'juego'),
        new Producto('Dables', 1200, 'juego'),
        new Producto('DigaloConMemes', 1000, 'juego'),
        new Producto('Estanciero', 2200, 'juego'),
        new Producto('Monopoly', 2500, 'juego'),
        new Producto('Munchkin', 1700, 'juego'),
        new Producto('Teg', 2300, 'juego'),
        new Producto('Uno', 800, 'juego')
    ];

    // Obtener botones de agregar al carrito
    const botonesAgregarCarrito = document.querySelectorAll('.btn');

    // Inicializar carrito
    const carrito = [];

    // Agregar evento a cada botón de agregar al carrito
    botonesAgregarCarrito.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            agregarAlCarrito(index);
            actualizarProductosCarrito();
            calcularTotal();
        });
    });

    // Función para agregar producto al carrito
    function agregarAlCarrito(index) {
        const producto = productos[index];
        carrito.push(producto);
    }

    // Función para actualizar cantidad de productos en el carrito
    function actualizarProductosCarrito() {
        const unidadesProductos = document.querySelector('.productos');
        unidadesProductos.textContent = carrito.length;
    }

    // Función para calcular el total de la compra
    function calcularTotal() {
        const importeTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
        const importeElemento = document.querySelector('.importe');
        importeElemento.textContent = `$${importeTotal.toFixed(2)}`;
    }
});
