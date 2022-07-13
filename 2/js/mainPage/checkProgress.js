function createEmptyListMsg(){
    const boxForMessaging = document.createElement('div');
    boxForMessaging.innerText = "항목이 없습니다";
    boxForMessaging.classList.add('font-color-sub', 'font-size-15', 'flex-box-row', 'flex-alignment-center', 'margin-top-24');
    return boxForMessaging
}

const emptyInProgress = createEmptyListMsg();
const emptyDone = createEmptyListMsg();

function checkProgress(currentCategory) {
    const inProgress = getNumTasks(currentCategory, false);
    const done = getNumTasks(currentCategory, true);

    if (inProgress !== 0) {
        if (tasksInProgress.contains(emptyInProgress))
            tasksInProgress.removeChild(emptyInProgress);
    } else tasksInProgress.appendChild(emptyInProgress);

    if (done !== 0) {
        if (tasksDone.contains(emptyDone))
            tasksDone.removeChild(emptyDone);
    } else tasksDone.appendChild(emptyDone);

    document.querySelector('#task-progress').innerHTML = `${inProgress}개 진행중, ${done}개 완료됨`;
}

function getNumTasks(currentCategory, isDone) {
    let result = 0

    taskList.forEach((task) => {
        if (currentCategory === '전체')
            task.isDone === isDone && result++;
        else if (currentCategory === task.category)
            task.isDone === isDone && result++;
    });

    return result;
}