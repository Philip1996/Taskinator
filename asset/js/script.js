var buttonEI = document.querySelector("#save-task");
console.log(buttonEI);

var buttonEI =document.querySelector("#save-task");
var tasksToDoEI = document.querySelector("#tasks-to-do");
buttonEI.addEventListener("click",function(){
    var listItemEI = document.createElement("li");
    listItemEI.className ="task-item";
    listItemEI.textContent ="This is a new task.";
    tasksToDoEI.appendChild(listItemEI);
});
var createTaskHandler = function(){
    var listItemEI = document.createElement("li");
    listItemEI.className ="task-item";
    listItemEI.textContent ="This is a new task.";
    tasksToDoEI.appendChild(listItemEI);
};
buttonEI.addEventListener("click",createTaskHandler);

