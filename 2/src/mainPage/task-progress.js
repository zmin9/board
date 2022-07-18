import {createEmptyMsgElement} from "../element.js";

const emptyDoneElement = createEmptyMsgElement();
const emptyInProgressElement = createEmptyMsgElement();

function setProgressText(taskList) {
    const doingTaskNum = getNumTasks(taskList, false);
    const doneTaskNum = getNumTasks(taskList, true);

    document.querySelector('#task-progress').innerHTML = `${doingTaskNum}개 진행중, ${doneTaskNum}개 완료됨`;

    setEmptyMsgElement(doingTaskNum, document.querySelector('.tasks-doing'), emptyInProgressElement);
    setEmptyMsgElement(doneTaskNum, document.querySelector('.tasks-done'), emptyDoneElement);

    function getNumTasks(taskList, isDone) {
        let result = 0;
        taskList.forEach((task) => {
            task.isDone === isDone && result++;
        });
        return result;
    }
}


function setEmptyMsgElement( taskNum, targetListElement, emptyMsgElem ) {
    if (taskNum === 0)
        targetListElement.appendChild(emptyMsgElem);
    else
        if(targetListElement.contains(emptyMsgElem))
            targetListElement.removeChild(emptyMsgElem);
}

export default setProgressText;