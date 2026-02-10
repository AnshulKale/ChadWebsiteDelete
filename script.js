const clock = document.getElementById("clock");
const dashboard = document.querySelector(".dashboard");
const hero = document.querySelector(".hero");
const enterBtn = document.getElementById("enterBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const focusLevel = document.getElementById("focusLevel");

let tasks = 0;
let focus = 100;

// Live Clock
setInterval(() => {
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();
}, 1000);

// Enter System Animation
enterBtn.addEventListener("click", () => {
    hero.style.transform = "scale(0.8)";
    hero.style.opacity = "0";
    setTimeout(() => {
        hero.style.display = "none";
        dashboard.classList.remove("hidden");
    }, 500);
});

// Add Task
function addTask() {
    if(taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button onclick="removeTask(this)">X</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
    tasks++;
    updateStats();
}

// Remove Task
function removeTask(btn) {
    btn.parentElement.remove();
    tasks--;
    focus += 5;
    updateStats();
}

// Update Stats
function updateStats() {
    taskCount.innerText = tasks;
    focusLevel.innerText = focus;
}
