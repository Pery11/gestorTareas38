import { getTasks } from "./task";

//Funcion para mostarle al usuario las tareas
export const renderTasks = () => {
    const taskList =document.getElementById("task-list");
    taskList.innerHTML ='';
    const tasks =getTasks();

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        //Añadir clase solo si está completada
        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
        ${task.text}
        <div class="buttons">
        <button class="delete"> Eliminar </button>
        <button class="toggle"> ${ task.completed === false ? "Completar" : "Deshacer" } </button>
        <div/>
        `;

        taskList.appendChild(li);


    });
};