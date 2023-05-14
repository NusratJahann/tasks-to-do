let p = true;
let inputBox = document.getElementById("taskInput");
const addBtn = document.getElementById("add");
const tasksContainer = document.getElementById("tasks");
const resetBtn = document.getElementById("resetBtn")
const task = document.getElementsByClassName("block-element");
const taskPending = document.getElementById("taskPending")
const instruction = document.getElementById("instruction");


addBtn.addEventListener("click", addingTask)

function addingTask() {
    const task = document.createElement("div");
    task.classList.add("block-element");
    task.innerHTML = `<p class="task"><i class="fi fi-sr-star "></i>${inputBox.value}<i class="fi fi-sr-cross-circle"></i></p>`

    if (inputBox.value != "") {
        tasksContainer.appendChild(task);
        inputBox.value = "";
        tasksContainer.classList.add("reverse-order");
    }

    taskPending.innerText = tasksContainer.childElementCount;


    if (tasksContainer.childElementCount > 0) {
        instruction.style.display = "block";
    }

};


tasksContainer.addEventListener("click", function (event) {

    if (event.target.className == "fi fi-sr-cross-circle") {
        event.target.parentNode.parentNode.remove();
    }
    if (tasksContainer.childElementCount == 0) {
        instruction.style.display = "none";
    }

    taskPending.innerText = tasksContainer.childElementCount;


    if (p == true) {

        p = false;
        if (event.target.tagName.toLowerCase() == "p") {
            event.target.style.textDecoration = "line-through";
            event.target.parentNode.style.opacity = "50%";
            event.target.childNodes[0].style.display = 'none';
        }

    } 
    
    else {

        if (event.target.tagName.toLowerCase() == "p") {
            event.target.style.textDecoration = "none";
            event.target.parentNode.style.opacity = "100%";
            event.target.childNodes[0].style.display = 'inline';
        }

        p = true;
    }

});