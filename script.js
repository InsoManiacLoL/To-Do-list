const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        renderTaskList();
        taskInput.value = '';
    }
});

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTaskList();
        });
        taskList.appendChild(li);
    });
}
