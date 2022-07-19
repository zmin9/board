import data from "../data.js"
import {createTaskBoxElement} from "../element.js";
import createContextMenuModal from "./context-menu-modal.js";
import setProgressText from "./task-progress.js";

const doingTaskContainer = document.querySelector('.tasks-doing');
const doneTaskContainer = document.querySelector('.tasks-done');

attachEventToTaskContainer(doingTaskContainer);
attachEventToTaskContainer(doneTaskContainer);

function showTaskBoxElement(){
    resetChildren(doingTaskContainer);
    resetChildren(doneTaskContainer);
    setProgressText(data.filteredTaskArr());

    data.filteredTaskArr().forEach((task) => {
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
        const taskBoxElement = getTaskBoxElementFor(e.target);
        if(taskBoxElement.taskId) {
            data.changeCheckedState(taskBoxElement.taskId);
            locateTaskBoxElement(taskBoxElement);
        }
    });
    container.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const taskBoxElement = getTaskBoxElementFor(e.target);
        taskBoxElement && document.body.appendChild(createContextMenuModal(taskBoxElement.taskId));
    }, false);

    function getTaskBoxElementFor(eventTarget) {
        let curElement = eventTarget;
        while (curElement.parentNode !== document) {
            if(curElement.hasOwnProperty('taskId'))
                return curElement;
            curElement = curElement.parentNode;
        }
        return null;
    }
}

function locateTaskBoxElement(taskBoxElement) {
    const targetContainer = getContainerPutTaskInto(taskBoxElement.taskId);

    if (targetContainer.children.length === 0)
        targetContainer.appendChild(taskBoxElement);
    else {
        let isAppended = false;
        for (let i = 0; i < targetContainer.children.length; i++) {
            if (Number(taskBoxElement.taskId) < Number(targetContainer.children[i].taskId)) {
                targetContainer.children[i].before(taskBoxElement);
                isAppended = true;
                break;
            }
        }
        if (!isAppended) targetContainer.appendChild(taskBoxElement);
    }
    setProgressText(data.filteredTaskArr());

    function getContainerPutTaskInto(taskId) {
        return data.task(taskId).isDone ? doneTaskContainer : doingTaskContainer;
    }
}


export default showTaskBoxElement;