const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const categoryList = new Set(['전체', ...taskList.map((task) => task.category)]);

const tasksInProgress = document.querySelector('.tasks-in-progress');
const tasksDone = document.querySelector('.tasks-done');

let currentCategory = '전체';

const boxForMessaging = document.createElement('div');
boxForMessaging.innerText = "항목이 없습니다";
boxForMessaging.classList.add('font-color-sub', 'font-size-15', 'flex-box-row', 'flex-alignment-center', 'margin-top-24');

function checkProgress() {
    let [inProgress, done] = [0 ,0];

    [...tasksInProgress.children].forEach((task) => {
        if (task !== boxForMessaging && task.style.display !== 'none') inProgress++;
    });

    [...tasksDone.children].forEach((task) => {
        if (task !== boxForMessaging && task.style.display !== 'none') done++;
    });

    if (inProgress !== 0) {
        if (tasksInProgress.contains(boxForMessaging))
            tasksInProgress.removeChild(boxForMessaging);
    } else tasksInProgress.appendChild(boxForMessaging);

    if (done !== 0) {
        if (tasksDone.contains(boxForMessaging))
            tasksDone.removeChild(boxForMessaging);
    } else tasksDone.appendChild(boxForMessaging);

    document.querySelector('.task-progress').innerHTML = `${inProgress}개 진행중, ${done}개 완료됨`;
}