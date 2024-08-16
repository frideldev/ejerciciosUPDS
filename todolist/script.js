// Seleccionar elementos del DOM
const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const filterAllButton = document.getElementById('filterAll');
const filterActiveButton = document.getElementById('filterActive');
const filterCompletedButton = document.getElementById('filterCompleted');

// Array para almacenar las tareas
let tasks = [];

// Función para renderizar las tareas
function renderTasks(tasksToRender) {
    taskList.innerHTML = '';
    tasksToRender.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="complete">Completar</button>
            <button class="delete">Eliminar</button>
        `;
        
        // Evento para marcar como completada
        li.querySelector('.complete').addEventListener('click', () => toggleComplete(index));
        
        // Evento para eliminar
        li.querySelector('.delete').addEventListener('click', () => deleteTask(index));
        
        taskList.appendChild(li);
    });
}

// Función para agregar una nueva tarea
function addTask() {
    const text = newTaskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        newTaskInput.value = '';
        renderTasks(tasks);
    }
}

// Función para marcar/desmarcar como completada
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks(tasks);
}

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks(tasks);
}

// Función para filtrar tareas
function filterTasks(filter) {
    switch(filter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

// Eventos
addTaskButton.addEventListener('click', addTask);

filterAllButton.addEventListener('click', () => renderTasks(filterTasks('all')));
filterActiveButton.addEventListener('click', () => renderTasks(filterTasks('active')));
filterCompletedButton.addEventListener('click', () => renderTasks(filterTasks('completed')));

// Renderizar tareas iniciales
renderTasks(tasks);