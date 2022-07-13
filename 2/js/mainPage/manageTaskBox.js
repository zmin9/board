function createTaskBoxElement(task) {
    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task-title', 'font-weight-500', 'line-height-24', 'font-color-main');
    taskTitle.append(task.title);

    const taskCategory = document.createElement('div');
    taskCategory.classList.add('task-category', 'margin-top-8', 'font-weight-600', 'font-color-sub');
    taskCategory.append(task.category);

    const taskInformation = document.createElement('div');
    taskInformation.classList.add('task-info');
    taskInformation.append(taskTitle, taskCategory);

    const taskCheckbox = document.createElement('div');
    taskCheckbox.className = 'task-check';

    const labelForCheckbox = document.createElement('label');
    labelForCheckbox.classList.add('flex-box-row');
    labelForCheckbox.htmlFor = 'task' + String(task.id);
    labelForCheckbox.append(taskCheckbox, taskInformation);

    const checkboxTypeInput = document.createElement('input');
    checkboxTypeInput.type = 'checkbox';
    checkboxTypeInput.id = 'task' + String(task.id);
    checkboxTypeInput.checked = task.isDone;

    checkboxTypeInput.addEventListener('click', () => {
        taskList[taskList.indexOf(task)].isDone = !taskList[taskList.indexOf(task)].isDone;
        localStorage.setItem('tasks', JSON.stringify(taskList));
    });

    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box', 'margin-top-16', 'flex-box-row');
    taskBox.id = task.id;
    taskBox.append(checkboxTypeInput, labelForCheckbox);

    return taskBox;
}

function locateTaskBox(taskBox) {
    const targetList = taskBox.isDone ? tasksDone : tasksInProgress;
    if (targetList.children.length === 0) {
        targetList.append(taskBox);
    } else {
        let isAppended = false;
        for (let i = 0; i < targetList.children.length; i++) {
            if (taskBox.id < targetList.children[i].id) {
                targetList.children[i].before(taskBox);
                isAppended = true;
                break;
            }
        }
        if (!isAppended) targetList.appendChild(taskBox);
    }
    localStorage.setItem('tasks', JSON.stringify(taskList));

    updateProgressText(currentCategory);
}