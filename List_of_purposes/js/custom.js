const form = document.querySelector('.form-list');
const list = document.querySelector('#list');
let listaProposito = [];


form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el valor de la tarea del input
    const listaProposito = form.elements.proposito.value;
    // Agregar los elementos a la lista de tareas
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Botón borrar elemento de la lista
    btn.textContent = "Borrar";
    btn.addEventListener("click", function() {
        li.remove();
    });

    // Agregar el propósito a la lista 
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(listaProposito));
    li.appendChild(btn);
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
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(listaProposito));
    list.appendChild(li);
}