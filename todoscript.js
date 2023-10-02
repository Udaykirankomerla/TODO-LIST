const inputbox = document.getElementById("inputb");
const listc = document.getElementById("list");
function add(){
    if(inputbox.value == ''){
        alert("Need to Enter the task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "DELETE";
        li.appendChild(span);
    }
    inputbox.value = "";
    database();
}
listc.addEventListener("click", function(clickon){
    if(clickon.target.tagName === "LI"){
        clickon.target.classList.toggle("check");
        database();
    }
    else if(clickon.target.tagName === "SPAN"){
        clickon.target.parentElement.remove();
        database();
    }
}, false);
function database(){
    localStorage.setItem("data",listc.innerHTML);
}
function opentask(){
    listc.innerHTML = localStorage.getItem("data");

}
opentask();
