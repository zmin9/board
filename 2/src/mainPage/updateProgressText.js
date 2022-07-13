function updateProgressText(taskList) {
    const inProgress = getNumTasks(taskList, false);
    const done = getNumTasks(taskList, true);

    document.querySelector('#task-progress').innerHTML = `${inProgress}개 진행중, ${done}개 완료됨`;

    function getNumTasks(taskList, isDone) {
        let result = 0;
        taskList.forEach((task) => {
            task.isDone === isDone && result++;
        });
        return result;
    }
}