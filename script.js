function validarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    
    if (nombre.trim() == '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }
    
    if (email.trim() == '' || !email.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    
    if (contraseña.trim() == '' || contraseña.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }
    
    return true;
}

var carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    
    console.log(carrito);
}

function filtrarPorCategoria(categoria) {
    
    var productosFiltrados = productos.filter(function(producto) {
        return producto.categoria === categoria;
    });
    
    
    console.log(productosFiltrados);
}