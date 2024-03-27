const addBtn = document.getElementById("add_task");
const list = document.getElementById("tasks_list")
const taskName = document.getElementById("task_name");
const taskNum = document.getElementById("task_num");
const clearPrekes = document.getElementById("clear_prekes");

let prekes = [];

const showPrekes = () => {
    list.innerHTML = "";
    prekes.forEach((p) => {
        const newTask = document.createElement("li");
        newTask.className = "list-group-item";
        newTask.textContent = `${p.pavadinimas} ${p.kiekis}`;
        list.appendChild(newTask);
    })
}

const addTask = () => {
    const text = taskName.value;
    const quantity = taskNum.value;

    taskName.value = "";
    taskNum.value = "";

    prekes.push({
        pavadinimas: text,
        kiekis: quantity
    });

    showPrekes();

    localStorage.setItem("prekes", JSON.stringify(prekes));
}

const clearList = () => {
    prekes = [];
    localStorage.removeItem("prekes");
    showPrekes();
}

addBtn.onclick = addTask;

clearPrekes.onclick = clearList;

const lsPrekes = localStorage.getItem('prekes');

if (lsPrekes != null) {
    prekes = JSON.parse(lsPrekes);
    showPrekes();
}

