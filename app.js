const input = document.querySelector("#input");
const listContainer = document.querySelector(".list-container");

function addTask(){
    if(input.value === ""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();