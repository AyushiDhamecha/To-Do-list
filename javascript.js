const inputBox = document.getElementById("input-box");
const list_container = document.getElementById("list_container");

function addtask() {
    if (inputBox.value === '') {
        alert("you must write somthing");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let edit = document.createElement("p");
        edit.innerHTML = "edit";
        li.appendChild(edit);
    }
    inputBox.value = "";
    savedata();
}


list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "P") {
        input.value = e.parentElement.previousElementSibling.innerHTML;
        e.parentElement.parentElement.remove(); 6
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask() {
    list_container.innerHTML = localStorage.getItem("data");
}
showTask();
