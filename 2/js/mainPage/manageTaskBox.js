function showTasksIn(taskList){
    resetChildren(tasksDone);
    resetChildren(tasksInProgress);

    taskList.forEach((task) => {
        locateTaskBoxElement(task, createTaskBoxElement(task), getListElementWillBePutInto(task));
    });
}

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

    const taskBoxElement = document.createElement('div');
    taskBoxElement.classList.add('task-box', 'margin-top-16', 'flex-box-row');
    taskBoxElement.id = task.id;
    taskBoxElement.append(checkboxTypeInput, labelForCheckbox);

    taskBoxElement.addEventListener('change', () => {
        taskList[taskList.indexOf(task)].isDone = !taskList[taskList.indexOf(task)].isDone;
        localStorage.setItem('tasks', JSON.stringify(taskList));
        locateTaskBoxElement(task, taskBoxElement, getListElementWillBePutInto(task));
        updateProgressText(currentCategory);
    });

    taskBoxElement.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        document.body.appendChild(createContextMenuModal(task, taskBoxElement));
    });

    return taskBoxElement;
}

function getListElementWillBePutInto(task) {
    return task.isDone ? tasksDone : tasksInProgress;
}

function locateTaskBoxElement(task, taskBoxElement, targetList) {
    if (targetList.children.length === 0)
        targetList.appendChild(taskBoxElement);

    else {
        let isAppended = false;
        for (let i = 0; i < targetList.children.length; i++) {
            if (Number(task.id) < Number(targetList.children[i].id)) {
                targetList.children[i].before(taskBoxElement);
                isAppended = true;
                break;
            }
        }
        if (!isAppended) targetList.appendChild(taskBoxElement);
    }
}

function resetChildren(element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
}
