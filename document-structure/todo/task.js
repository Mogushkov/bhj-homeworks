let tasksAdd = document.getElementById("tasks__add");
let tasksInput = document.getElementById("task__input");
let tasksList = document.getElementById("tasks");
tasksAdd.addEventListener("click", (event) => {
    event.preventDefault();
    let div = document.createElement("div"); 
    if (tasksInput.value != "") {
         div.classList.add("task");
         div.insertAdjacentHTML('beforeend', `
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            `);
         document.getElementById("tasks").appendChild(div);
         let tasksRemove = div.querySelector(".task__remove");
         tasksRemove.addEventListener("click", (e) => 
              e.target.parentElement.remove()
         );
         tasksInput.value = "";   
    }
});