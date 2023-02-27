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
        <input type="submit" value="X" id="addBtn" class="btn btn-danger fw-bold me-4 closetBtn">
    </div>
    `;

    //resetear mi valor
    addInput.value='';
}