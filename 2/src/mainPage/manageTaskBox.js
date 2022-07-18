import {createDivElement} from "../element.js";
import createContextMenuModal from "./contextMenuModal.js";
import data from "../data.js"
import updateProgressText from "./updateProgressText.js";

const doingTaskContainer = document.querySelector('.tasks-doing');
const doneTaskContainer = document.querySelector('.tasks-done');
// const test = document.querySelectorAll('[class^="tasks-"]');

attachEventTaskContainer(doingTaskContainer);
attachEventTaskContainer(doneTaskContainer);

function showTaskBoxElem(taskList){
    resetChildren(doingTaskContainer);
    resetChildren(doneTaskContainer);

    taskList.forEach((task) => {
        locateTaskBoxElement(createTaskBoxElement(task));
    });

    function createTaskBoxElement(task) {
        const taskCheckbox = createDivElement(['task-check']);

        const taskTitle = createDivElement(['task-title', 'font-weight-500', 'line-height-24', 'font-color-main'], [task.title]);
        const taskCategory = createDivElement(['task-category', 'font-weight-600', 'margin-top-8', 'font-color-sub'], [task.category]);
        const taskInformation = createDivElement(['task-info'], [taskTitle, taskCategory]);

        const labelForCheckbox = document.createElement('label');
        labelForCheckbox.classList.add('flex-box-row');
        labelForCheckbox.htmlFor = 'task' + task.id;
        labelForCheckbox.append(taskCheckbox, taskInformation);

        const checkboxTypeInput = document.createElement('input');
        checkboxTypeInput.type = 'checkbox';
        checkboxTypeInput.id = 'task' + task.id;
        checkboxTypeInput.checked = task.isDone;

        const taskBoxElem = createDivElement(['task-box', 'margin-top-16', 'flex-box-row'], [checkboxTypeInput, labelForCheckbox]);
        taskBoxElem.taskId = task.id;

        return taskBoxElem;
    }

    function resetChildren(element){
        while(element.firstChild){
            element.removeChild(element.lastChild);
        }
    }
}

function attachEventTaskContainer(container){
    container.addEventListener('change', (e) => {
        const taskBoxElem = findTaskElemFor(e.target);
        if(taskBoxElem.taskId) {
            data.changeCheckedState(taskBoxElem.taskId);
            locateTaskBoxElement(taskBoxElem);
        }
    });
    container.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const taskBoxElem = findTaskElemFor(e.target);
        taskBoxElem.taskId && document.body.appendChild(createContextMenuModal(taskBoxElem.taskId));
    }, false);

    function findTaskElemFor(eventTarget) {
        let curElem = eventTarget;
        while (curElem.parentNode !== document) {
            if(curElem.hasOwnProperty('taskId'))
                return curElem;
            curElem = curElem.parentNode;
        }
        return null;
    }
}

function locateTaskBoxElement(taskBoxElement) {
    const targetList = getPutIntoContainer(taskBoxElement.taskId);

    if (targetList.children.length === 0)
        targetList.appendChild(taskBoxElement);

    else {
        let isAppended = false;
        for (let i = 0; i < targetList.children.length; i++) {
            if (Number(taskBoxElement.taskId) < Number(targetList.children[i].taskId)) {
                targetList.children[i].before(taskBoxElement);
                isAppended = true;
                break;
            }
        }
        if (!isAppended) targetList.appendChild(taskBoxElement);
    }

    updateProgressText(data.filteredTaskArr());



    function getPutIntoContainer(taskId) {
        return data.task(taskId).isDone ? doneTaskContainer : doingTaskContainer;
    }
}


export default showTaskBoxElem;