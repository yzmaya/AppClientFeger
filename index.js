

import {
  onGetTasks,
  saveTask,
  saveTaskDelegate,
  deleteTask,
  deleteTaskSelected,
  getTask,
  updateTask,
  getTasks,
  db,
} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const taskForm2 = document.getElementById("task-form2");
const tasksContainer = document.getElementById("tasks-container");
const tasksContainer2 = document.getElementById("tasks-container2");
const tasksContainer3 = document.getElementById("tasks-container3");
let editStatus = false;
let id = "";




window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      tasksContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
      <span>Fecha de última modificación ${task.fecha}</span>
    <h3 class="h5">${task.title}</h3>
    <p>${task.description}</p>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Eliminar
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Editar
      </button>
     
  
    </div>
  </div>
 
  `;
    });

    const selectElement = document.querySelector('.nieve');

    selectElement.addEventListener('change', (event) => {
      const resultado = document.querySelector('.resultado');
      localStorage.setItem("userVar", `${event.target.value}`);
    
      
    });








    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );

    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
       
          const task = doc.data();
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;

          editStatus = true;
          id = doc.id;
         
          localStorage.setItem("myIdTarget", id);
          taskForm["btn-task-form"].innerText = "Actualizar";
         
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});





//agrega una tarea al repo

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];
  var hoy = new Date();
  var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
  var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
  var fechahora = fecha + " " + hora;

  try {
    if (!editStatus) {
      await saveTask(title.value, description.value, fechahora);
    } else {
      await updateTask(id, {
        title: title.value,
        description: description.value,
        fecha: fechahora,
      });

      editStatus = false;
      id = "";
      taskForm["btn-task-form"].innerText = "Guardar";

    }

    taskForm.reset();
    title.focus();
  } catch (error) {
    console.log(error);
  }
});


//agrega una tarea al repo

document.getElementById("btn-task-form2").addEventListener("click", async (e) => {
  e.preventDefault();
  var titulo = document.getElementById("task-title").value;
  var descripcion = document.getElementById("task-description").value;
  var miuservar = localStorage.getItem("userVar");
 
  
  await saveTaskDelegate(titulo, descripcion, miuservar);
  alert("tarea delegada completada!");
  var myIdTarget = localStorage.getItem("myIdTarget");

  await deleteTask(myIdTarget);
  editStatus = false;
  document.getElementById("task-title").value = "";
  document.getElementById("task-description").value = "";
  document.getElementById("btn-task-form").innerText = "Guardar";
  document.getElementById("nieve").value = "Seleccione 1";

});