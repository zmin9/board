function createTaskBox(task, i) {
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
    labelForCheckbox.htmlFor = 'task' + String(i);
    labelForCheckbox.append(taskCheckbox, taskInformation);

    const checkboxTypeInput = document.createElement('input');
    checkboxTypeInput.type = 'checkbox';
    checkboxTypeInput.id = 'task' + String(i);
    checkboxTypeInput.checked = task.isDone;

    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box', 'margin-top-16', 'flex-box-row');
    taskBox.listNum = i;
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

    checkProgress(currentCategory);
}