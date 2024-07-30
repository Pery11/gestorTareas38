// Para Obtenr las lista de tareas del almacenamiento del navegador 
let tasks = JSON.parse(localStorge.getItem('tasks')) || [];

// Funcion para agregar una tareas a las lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    }

}