function updateProgressText(currentCategory) {
    const inProgress = getNumTasks(currentCategory, false);
    const done = getNumTasks(currentCategory, true);

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