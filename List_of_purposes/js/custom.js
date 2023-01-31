const form = document.querySelector('.form-list');
const list = document.querySelector('#list');
let listaProposito = [];


form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el valor de la tarea del input
    const listaProposito = form.elements.proposito.value;
    // Agregar el elemento li a la lista de tareas
    const li = document.createElement("li");
    li.textContent = listaProposito;
    list.appendChild(li);
    
    // Guardar la tarea en localStorage
    localStorage.setItem("proposito", JSON.stringify(savedTasks));
    savedTasks.push(listaProposito);

    // Limpiar el valor del input
    //form.elements.listaProposito.value = "";
    form.reset();
});

// Cargar tareas guardadas en localStorage
const savedTasks = JSON.parse(localStorage.getItem("proposito")) || [];
for (const listaProposito of savedTasks) {
    const li = document.createElement("li");
    li.textContent = listaProposito;
    list.appendChild(li);
}