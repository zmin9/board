const doingTaskContainer = document.querySelector('.tasks-in-progress');
const doneTaskContainer = document.querySelector('.tasks-done');

function showTaskBoxElem(taskList){
    resetChildren(doneTaskContainer);
    resetChildren(doingTaskContainer);

    taskList.forEach((task) => {
        locateTaskBoxElement(createTaskBoxElement(task), getPutIntoContainer(task));
    });


    function createTaskBoxElement(task) {
        const taskCheckbox = createDivElement(['task-check']);

        const taskTitle = createDivElement(['task-title', 'font-weight-500', 'line-height-24', 'font-color-main'], [task.title]);
        const taskCategory = createDivElement(['task-category', 'font-weight-600', 'margin-top-8', 'font-color-sub'], [task.category]);
        const taskInformation = createDivElement(['task-info'], [taskTitle, taskCategory]);

        const labelForCheckbox = document.createElement('label');
        labelForCheckbox.classList.add('flex-box-row');
        labelForCheckbox.htmlFor = 'task' + String(task.id);
        labelForCheckbox.append(taskCheckbox, taskInformation);

        const checkboxTypeInput = document.createElement('input');
        checkboxTypeInput.type = 'checkbox';
        checkboxTypeInput.id = 'task' + String(task.id);
        checkboxTypeInput.checked = task.isDone;

        const taskBoxElem = createDivElement(['task-box', 'margin-top-16', 'flex-box-row'], [checkboxTypeInput, labelForCheckbox]);
        taskBoxElem.id = task.id;
        taskBoxElem.addEventListener('change', () => {
            task.isDone = !task.isDone;
            saveTaskDataArr();
            locateTaskBoxElement(taskBoxElem, getPutIntoContainer(task));
            updateProgressText(getFilteredTaskArr(selectedCategory, taskDataArr));
        });
        taskBoxElem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            document.body.appendChild(createContextMenuModal(task));
        });

        return taskBoxElem;
    }

    function getPutIntoContainer(task) {
        return task.isDone ? doneTaskContainer : doingTaskContainer;
    }

    function locateTaskBoxElement(taskBoxElement, targetList) {
        if (targetList.children.length === 0)
            targetList.appendChild(taskBoxElement);

        else {
            let isAppended = false;
            for (let i = 0; i < targetList.children.length; i++) {
                if (Number(taskBoxElement.id) < Number(targetList.children[i].id)) {
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
}