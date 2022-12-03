const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaRegalos = document.querySelector('#lista-regalos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

cargarEventListeners();
function cargarEventListeners() {
    listaRegalos.addEventListener('click', agregarRegalo);
}

function agregarRegalo(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const regaloSeleccionado = e.target.parentElement.parentElement;
        leerDatosRegalo(regaloSeleccionado);
    }
}

//lee contenido y extrae información del html
function leerDatosRegalo(regaloL) {
    console.log(regaloL);

    const infoPlanta = {
        id: regaloL.querySelector('a').getAttribute('data-id'),
        imagen: regaloL.querySelector('img').src,
        titulo: regaloL.querySelector('h4').textContent,
        precio: regaloL.querySelector('span').textContent,

    };

    console.log(infoPlanta);
}