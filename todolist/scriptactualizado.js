// Estructura básica de una tarea
const crearTarea = (id, descripcion) => ({ id, descripcion, completada: false });

// Lista de tareas
let tareas = [];

// Función para añadir tarea
const agregarTarea = (descripcion) => {
  const id = tareas.length + 1;
  const nuevaTarea = crearTarea(id, descripcion);
  tareas = [...tareas, nuevaTarea];
};

// Función para marcar tarea como completada
const completarTarea = (id) => {
  tareas = tareas.map(tarea =>
	tarea.id === id ? {...tarea, completada: true} : tarea
  );
};

// Función para listar tareas
const listarTareas = () => {
  tareas.forEach(({ id, descripcion, completada }) => {
	const estado = completada ? "Completada" : "Pendiente";
	console.log(`${id}. ${descripcion} - ${estado}`);
  });
};

// Función para obtener tareas completadas
const tareasCompletadas = () => {
  return tareas.filter(tarea => tarea.completada);
};

// Función para obtener descripciones de tareas
const obtenerDescripciones = () => {
  return tareas.map(tarea => tarea.descripcion);
};

// Uso del Todo List
agregarTarea("Comprar leche");
agregarTarea("Hacer ejercicio");
agregarTarea("Estudiar JavaScript");

completarTarea(1);

console.log("Lista de tareas:");
listarTareas();

console.log("\nTareas completadas:");
console.log(tareasCompletadas());

console.log("\nDescripciones de tareas:");
console.log(obtenerDescripciones());

