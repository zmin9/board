function updateProgressText(taskList) {
    const doingTaskNum = getNumTasks(taskList, false);
    const doneTaskNum = getNumTasks(taskList, true);

    document.querySelector('#task-progress').innerHTML = `${doingTaskNum}개 진행중, ${doneTaskNum}개 완료됨`;

    function getNumTasks(taskList, isDone) {
        let result = 0;
        taskList.forEach((task) => {
            task.isDone === isDone && result++;
        });
        return result;
    }
}

export default updateProgressText;