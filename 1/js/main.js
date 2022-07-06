const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

const tasksInProgressList = document.querySelector('.tasks-in-progress');
const tasksDoneList = document.querySelector('.tasks-done');

const todayDate = document.querySelector('h1[class="page-title"]');
const day = new Date();
todayDate.innerHTML = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;

function createTaskBox(task, i) {
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task-title';
    taskTitle.append(task.title);

    const taskCategory = document.createElement('div');
    taskCategory.className = 'task-category';
    taskCategory.append(task.category);

    const taskInformation = document.createElement('div');
    taskInformation.className = 'task-info';
    taskInformation.append(taskTitle, taskCategory);

    const taskCheckbox = document.createElement('div');
    taskCheckbox.className = 'task-check';

    const labelForCheckbox = document.createElement('label');
    labelForCheckbox.htmlFor = 'task' + String(i);
    labelForCheckbox.append(taskCheckbox, taskInformation);

    const checkboxTypeInput = document.createElement('input');
    checkboxTypeInput.type = 'checkbox';
    checkboxTypeInput.id = 'task' + String(i);
    checkboxTypeInput.checked = task.isDone;

    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    taskBox.classList.add(String(task.id));
    taskBox.classList.add('margin-top-16');
    taskBox.append(checkboxTypeInput, labelForCheckbox);

    return taskBox;
}

function locateTaskBox(taskBox) {
    const taskIdx = taskBox.classList[1];
    taskList[taskIdx].isDone = taskBox.querySelector('input[type="checkbox"]').checked;

    const targetList = taskList[taskIdx].isDone ? tasksDoneList : tasksInProgressList;
    if (targetList.children.length === 0) {
        targetList.append(taskBox);
    } else {
        let isAppended = false;
        for (let i = 0; i < targetList.children.length; i++) {
            if (taskBox.classList[1] * 1 < targetList.children[i].classList[1] * 1) {
                targetList.children[i].before(taskBox);
                isAppended = true;
                break;
            }
        }
        if (!isAppended) targetList.appendChild(taskBox);
    }

    document.querySelector('.task-progress').innerHTML = `${tasksInProgressList.children.length}개 진행중, ${tasksDoneList.children.length}개 완료됨`;
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

taskList.forEach((task, idx) => {
    const taskBox = createTaskBox(task, idx);
    locateTaskBox(taskBox);
    taskBox.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
        e.preventDefault();
        locateTaskBox(taskBox);
    });

    taskBox.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        const taskTitle = document.createElement('div');
        taskTitle.className = 'modal-title';
        taskTitle.innerText = task.title;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'large-button';
        deleteBtn.innerText = '삭제';

        const modal = document.createElement('div');
        modal.classList.add('modal', 'modal-position-center', 'flex-alignment-center');
        modal.append(taskTitle, deleteBtn);

        modal.children[1].addEventListener('click',()=>{
            taskList.splice(idx, 1);

            localStorage.setItem('tasks', JSON.stringify(taskList));
            document.body.lastChild.remove();
            taskBox.parentNode.removeChild(taskBox);
        });

        const background = document.createElement('div');
        background.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.lastChild.remove();
        });
        background.className = 'modal-background';

        const modalWithBackground = document.createElement('div');
        modalWithBackground.append(background, modal);
        this.blur();
        document.body.appendChild(modalWithBackground);
    });
});