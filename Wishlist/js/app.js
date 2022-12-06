const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaRegalos = document.querySelector('#lista-regalos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
var articulosCarrito = []

cargarEventListeners();
function cargarEventListeners() {
    listaRegalos.addEventListener('click', agregarRegalo);

    carrito.addEventListener('click', elimnarRegalo);

}

function agregarRegalo(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const regaloSeleccionado = e.target.parentElement.parentElement;
        leerDatosRegalo(regaloSeleccionado);
    }
}

//eliminar curso
function elimnarRegalo (e) {
    if (e.target.classList.contains('borrar-regalo'));
    const regaloId = e.target.getAttribute('data-id');
    //elimina arreglo por data-id
    articulosCarrito = articulosCarrito.filter( regaloL => regaloL.id !== regaloId);
    carritoHTML();
}

//lee contenido y extrae información del html
function leerDatosRegalo(regaloL) {
    //console.log(regaloL);

    const infoRegalo = {
        id: regaloL.querySelector('a').getAttribute('data-id'),
        imagen: regaloL.querySelector('img').src,
        titulo: regaloL.querySelector('h4').textContent,
        precio: regaloL.querySelector('span').textContent,
        cantidad: 1

    };


    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(regaloL => regaloL.id == infoRegalo.id);
    if (existe) {
        //actualizamos la cantidad
        const regalo = articulosCarrito.map(regaloL => {
            if (regaloL.id == infoRegalo.id) {
                regaloL.cantidad++;
                return regaloL;
            } else {
                return regaloL;
            }
        });
        articulosCarrito = [...regalo]
        
    } else {
        //Agrega elementos al carrito
        articulosCarrito = [...articulosCarrito, infoRegalo]
    }
    

    console.log(articulosCarrito);

    carritoHTML();
}

//muestra el carrito en el html
function carritoHTML() {

    //limpia el html
    limpiarHTML();

    //genera el html
    articulosCarrito.forEach(regaloL=> {
        const {imagen, titulo, precio, cantidad, id} = regaloL;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-regalo" data-id="${id}"> X </td>

        `;
        //agrega el html del carrito en el <tbody>
        contenedorCarrito.appendChild(row);
    })
}

//elimina los elementos del tbody
function limpiarHTML() {
    contenedorCarrito.innerHTML = '';
}