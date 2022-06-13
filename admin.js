

import {
    onGetTasks,
    onGetTasks2,
    onGetTasks3,
    onGetTasks4,
    onGetTasks5,
    onGetTasks6,
    onGetTasks7,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebase.js";
  
  const taskForm = document.getElementById("task-form");

  const tasksContainer2 = document.getElementById("tasks-container2");
  const tasksContainer3 = document.getElementById("tasks-container3");
  const tasksContainer4 = document.getElementById("tasks-container4");
  const tasksContainer5 = document.getElementById("tasks-container5");
  const tasksContainer6 = document.getElementById("tasks-container6");
  const tasksContainer7 = document.getElementById("tasks-container7");
  let editStatus = false;
  let id = "";
  

  

  //panel 2
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetTasks2((querySnapshot) => {
      tasksContainer2.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
  
        tasksContainer2.innerHTML += `
        <table style="  border-bottom-style: solid;  ">
        <td>
         <span style="color: blue;"> ${task.fecha} </span> </td>
      <td width="20%"> ${task.title} </td>
       <td width="80%"> ${task.description} </td>
     </table>`;
      });
  
    
  
   
      
    });
  });
  
  
  //panel 3
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetTasks3((querySnapshot) => {
      tasksContainer3.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
  
        tasksContainer3.innerHTML += `
     
    
      <table style="  border-bottom-style: solid;  ">
       <td>
        <span style="color: blue;"> ${task.fecha} </span> </td>
     <td width="20%"> ${task.title} </td>
      <td width="80%"> ${task.description} </td>
    </table>
       
   
    `;
      });
  
   
    });
  });
  
 
    //panel 4
  
    window.addEventListener("DOMContentLoaded", async (e) => {
      // const querySnapshot = await getTasks();
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.data());
      // });
    
      onGetTasks4((querySnapshot) => {
        tasksContainer4.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const task = doc.data();
    
          tasksContainer4.innerHTML += `
          <table style="  border-bottom-style: solid;  ">
          <td>
           <span style="color: blue;"> ${task.fecha} </span> </td>
        <td width="20%"> ${task.title} </td>
         <td width="80%"> ${task.description} </td>
       </table>`;
        });
    
     
      });
    });


     //panel 5
  
     window.addEventListener("DOMContentLoaded", async (e) => {
      // const querySnapshot = await getTasks();
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.data());
      // });
    
      onGetTasks5((querySnapshot) => {
        tasksContainer5.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const task = doc.data();
    
          tasksContainer5.innerHTML += `
          <table style="  border-bottom-style: solid;  ">
          <td>
           <span style="color: blue;"> ${task.fecha} </span> </td>
        <td width="20%"> ${task.title} </td>
         <td width="80%"> ${task.description} </td>
       </table>`;
        });
    
     
      });
    });


         //panel 6
  
         window.addEventListener("DOMContentLoaded", async (e) => {
          // const querySnapshot = await getTasks();
          // querySnapshot.forEach((doc) => {
          //   console.log(doc.data());
          // });
        
          onGetTasks6((querySnapshot) => {
            tasksContainer6.innerHTML = "";
        
            querySnapshot.forEach((doc) => {
              const task = doc.data();
        
              tasksContainer6.innerHTML += `
              
              <table style="  border-bottom-style: solid;  ">
              <td>
               <span style="color: blue;"> ${task.fecha} </span> </td>
            <td width="20%"> ${task.title} </td>
             <td width="80%"> ${task.description} </td>
           </table>`;
            });
        
         
          });
        });


             //panel 7
  
     window.addEventListener("DOMContentLoaded", async (e) => {
      // const querySnapshot = await getTasks();
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.data());
      // });
    
      onGetTasks7((querySnapshot) => {
        tasksContainer7.innerHTML = "";
    
        querySnapshot.forEach((doc) => {
          const task = doc.data();
    
          tasksContainer7.innerHTML += `
          <table style="  border-bottom-style: solid;  ">
          <td>
           <span style="color: blue;"> ${task.fecha} </span> </td>
        <td width="20%"> ${task.title} </td>
         <td width="80%"> ${task.description} </td>
       </table>`;
        });
    
     
      });
    });

    $(document).ready(function () {

      (function ($) {

          $('#filtrar').keyup(function () {

              var rex = new RegExp($(this).val(), 'i');
            
              $('.buscar tr').hide();
              $('.buscar tr').filter(function () {
                  return rex.test($(this).text());
                    
              }).show();

          });

      }(jQuery));
       

  });