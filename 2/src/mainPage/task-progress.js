import {createEmptyMsgElement} from "../element.js";

const emptyDoneElement = createEmptyMsgElement();
const emptyInProgressElement = createEmptyMsgElement();

function setProgressText(taskList) {
    const doingTaskNum = getTasksNum(taskList, false);
    const doneTaskNum = getTasksNum(taskList, true);

    document.querySelector('#task-progress').innerHTML = `${doingTaskNum}개 진행중, ${doneTaskNum}개 완료됨`;

    setEmptyMsgElement(doingTaskNum, document.querySelector('.tasks-doing'), emptyInProgressElement);
    setEmptyMsgElement(doneTaskNum, document.querySelector('.tasks-done'), emptyDoneElement);

    function getTasksNum(taskList, isDone) {
        let result = 0;
        taskList.forEach((task) => {
            task.isDone === isDone && result++;
        });
        return result;
    }
}


function setEmptyMsgElement( taskNum, targetContainerElement, emptyMsgElem ) {
    if (taskNum === 0)
        targetContainerElement.appendChild(emptyMsgElem);
    else
        if(targetContainerElement.contains(emptyMsgElem))
            targetContainerElement.removeChild(emptyMsgElem);
}

export default setProgressText;