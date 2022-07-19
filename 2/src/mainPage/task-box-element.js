import data from "../data.js"
import {createTaskBoxElement} from "../element.js";
import createContextMenuModal from "./context-menu-modal.js";
import setProgressText from "./task-progress.js";

const doingTaskContainer = document.querySelector('.tasks-doing');
const doneTaskContainer = document.querySelector('.tasks-done');

attachEventToTaskContainer(doingTaskContainer);
attachEventToTaskContainer(doneTaskContainer);

function showTaskBoxElem(){
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
        const taskBoxElem = findTaskElemFor(e.target);
        if(taskBoxElem.taskId) {
            data.changeCheckedState(taskBoxElem.taskId);
            locateTaskBoxElement(taskBoxElem);
        }
    });
    container.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const taskBoxElem = findTaskElemFor(e.target);
        taskBoxElem && document.body.appendChild(createContextMenuModal(taskBoxElem.taskId));
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


export default showTaskBoxElem;