//contador de tareas para luego identificar
let contadorId = 0;
//variable tipo input = value -->mostrar su valor al escribi
let addInput = document.querySelector('input[type="text"]');

let user_input = document.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('evento submit ')

    addTarea();
});

let addTarea = () => {
    //remplazar id
    contadorId++;
    let nuevoTextoInput = addInput.value;


    list.innerHTML += ` 
    <div class="task col-6 mx-auto mt-2 d-flex  justify-content-between " id="${contadorId}">
        <label>
            <input type="checkbox" name="" id="">
                ${nuevoTextoInput}
        </label>
        <img src="/images/trash.png" alt="trash" class="closetBtn small-trash img-fluid">
    </a>

    </div>
    `;

    //resetear mi valor
    addInput.value = '';


    //creamos otra funcion para actualizar estado de tarea
    UpdateEstado();
};


//
list.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == 'INPUT') {
        console.log(event.value)
        UpdateEstado();
    } else if(event.srcElement.nodeName == 'IMG'){
        deleteTarea(event.srcElement.parentNode.id);
    }
})






let UpdateEstado = () => {
    let elemnt = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="submit"]:checked');
    estadoTask.innerHTML = `<p class="fw-bold">Tareas pendientes : ${elemnt.length} 
     Completadas : ${checkbox.length} </p> `;
}


//funcion para borrar tareas
let deleteTarea = (id) =>{

    let removeTare = document.getElementById(id);
    list.removeChild(removeTare);
}

