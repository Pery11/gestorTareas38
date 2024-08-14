// Para Obtenr las lista de tareas del almacenamiento del navegador 
let tasks =JSON.parse(localStorage.getItem('tasks')) || [];

//Función para poder llevar las tareas de las lista a otros archivos de JS
export const getTasks =  () => tasks;

// Funcion para agregar una tareas a las lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Función para eliminar una tarea de la lista 
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// FuNCION PARA ACATUALIZAR UNA ATREA DE LA LISTA
export const toggleTask = (id) =>{
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
        
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

}