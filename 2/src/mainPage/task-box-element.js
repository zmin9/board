import data from "../data.js"
import {createTaskBoxElement} from "../element.js";
import createContextMenuModal from "./context-menu-modal.js";
import setProgressText from "./task-progress.js";

const doingTaskContainer = document.querySelector('.tasks-doing');
const doneTaskContainer = document.querySelector('.tasks-done');
// const test = document.querySelectorAll('[class^="tasks-"]');

attachEventToTaskContainer(doingTaskContainer);
attachEventToTaskContainer(doneTaskContainer);

function showTaskBoxElem(taskList){
    resetChildren(doingTaskContainer);
    resetChildren(doneTaskContainer);
    setProgressText(data.filteredTaskArr());

    taskList.forEach((task) => {
        locateTaskBoxElement(createTaskBoxElement(task));
    });


    function resetChildren(element){
        while(element.firstChild){
            element.removeChild(element.lastChild);
        }
    }
}

function attachEventToTaskContainer(container){
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

    setProgressText(data.filteredTaskArr());



    function getPutIntoContainer(taskId) {
        return data.task(taskId).isDone ? doneTaskContainer : doingTaskContainer;
    }
}


export default showTaskBoxElem;