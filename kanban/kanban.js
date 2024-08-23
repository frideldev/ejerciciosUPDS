// Array que contenga objetos para los datos de las tareas
const tareas=[
    {id:1,texto:"Estilos"},
    {id:2,texto:"Validar Formularios"},
    {id:3,texto:"Validacion de Login"},
];
// Funcion para crear elementos de la tarea

const crearElementoTarea=(tarea)=>{
    const elemento=document.createElement('div');
    elemento.classList.add('tarea');
    elemento.setAttribute('draggable',true)
    elemento.id=`tarea-${tarea.id}`
    elemento.textContent=tarea.texto;
    return elemento;
}
const dragStart=(e)=>{
    e.dataTransfer.setData('text/plain',e.target.id)
}
const dragOver=(e)=>{
    e.preventDefault();
}
const drop=(e)=>{
    e.preventDefault();
    const id=e.dataTransfer.getData('text');
    const tareaArrastrada=document.getElementById(id);
    const columnaDestino=e.target.closest('.columna')
    if (columnaDestino && tareaArrastrada){
        columnaDestino.appendChild(tareaArrastrada)
    }
}
const inicializarTablero=()=>{
    const columnaHacer=document.getElementById('porHacer')
    tareas.forEach(tarea=>{
        columnaHacer.appendChild(crearElementoTarea(tarea))
    })
    document.querySelectorAll('.tarea').forEach(tarea=>{
        tarea.addEventListener('dragstart',dragStart)
    })
    document.querySelectorAll('.columna').forEach(columna=>{
        columna.addEventListener('dragover',dragOver)
        columna.addEventListener('drop',drop)
    })
}
document.addEventListener('DOMContentLoaded',inicializarTablero)
