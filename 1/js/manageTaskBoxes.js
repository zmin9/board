const todayDate = document.querySelector('#today');
const day = new Date();
todayDate.innerHTML = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;

function createTaskBox(task, i) {
    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task-title', 'font-weight-500', 'line-height-24');
    taskTitle.append(task.title);

    const taskCategory = document.createElement('div');
    taskCategory.classList.add('task-category', 'margin-top-8', 'font-weight-600');
    taskCategory.append(task.category);

    const taskInformation = document.createElement('div');
    taskInformation.classList.add('task-info');
    taskInformation.append(taskTitle, taskCategory);

    const taskCheckbox = document.createElement('div');
    taskCheckbox.className = 'task-check';

    const labelForCheckbox = document.createElement('label');
    labelForCheckbox.classList.add('flex-box-row');
    labelForCheckbox.htmlFor = 'task' + String(i);
    labelForCheckbox.append(taskCheckbox, taskInformation);

    const checkboxTypeInput = document.createElement('input');
    checkboxTypeInput.type = 'checkbox';
    checkboxTypeInput.id = 'task' + String(i);
    checkboxTypeInput.checked = task.isDone;

    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    taskBox.listNum = i;
    taskBox.classList.add('margin-top-16');
    taskBox.append(checkboxTypeInput, labelForCheckbox);

    return taskBox;
}

function locateTaskBox(taskBox) {
    const taskIdx = taskBox.listNum;
    taskList[taskIdx].isDone = taskBox.querySelector('input[type="checkbox"]').checked;

    const targetList = taskList[taskIdx].isDone ? tasksDone : tasksInProgress;
    if (targetList.children.length === 0) {
        targetList.append(taskBox);
    } else {
        let isAppended = false;
        for (let i = 0; i < targetList.children.length; i++) {
            if (taskBox.listNum < targetList.children[i].listNum) {
                targetList.children[i].before(taskBox);
                isAppended = true;
                break;
            }
        }
        if (!isAppended) targetList.appendChild(taskBox);
    }
    localStorage.setItem('tasks', JSON.stringify(taskList));

    checkProgress();
}

taskList.forEach((task) => {
    const taskBox = createTaskBox(task, taskList.indexOf(task));
    locateTaskBox(taskBox);
    taskBox.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        locateTaskBox(taskBox);
    });

    taskBox.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.blur();
        document.body.appendChild(createContextMenuModal(task, taskBox));
    });
});