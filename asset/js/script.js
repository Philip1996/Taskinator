var formEI = document.querySelector("#task-form");
var tasksToDoEI = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    
    var taskNameInput = document.querySelector("input[name='task-name']");
    console.log(taskNameInput);
    
    var taskTypeInput = document.querySelector("input[name='task-type']").value;
    //create list item
    var listItemEI = document.createElement("li");
    listItemEI.className = "task-item";

    //create div to hole task info and add to list item
    var taskInfoEI = document.createElement("div")
    taskInfoEI.className="task-info";

    //add HTML content to div
    taskInfoEI.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEI.appendChild(taskInfoEI);

    //add entire list item to list
    tasksToDoEI.appendChild(listItemEI);
};
formEI.addEventListener("submit", createTaskHandler);

