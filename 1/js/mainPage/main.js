const tasksInProgress = document.querySelector('.tasks-in-progress');
const tasksDone = document.querySelector('.tasks-done');

const todayDate = document.querySelector('#today');
const day = new Date();
todayDate.innerHTML = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;

let currentCategory = '전체';

taskList.forEach((task) => {
    const taskBox = createTaskBox(task, taskList.indexOf(task));
    locateTaskBox(taskBox);
    taskBox.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        locateTaskBox(taskBox);
    });

    taskBox.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.blur();
        document.body.appendChild(createContextMenuModal(task, taskBox));
    });
});

const allTaskBox = document.querySelectorAll('.task-box');

categoryList.forEach((category) => {
    if(category!=='') {
        const categoryBtn = createCategoryButton(category);
        if (category === currentCategory) categoryBtn.classList.add('bg-main-color');
        if (category.length > 12)
            categoryBtn.innerText = category.slice(0,10) + '⋯';
        categoryBtn.addEventListener('click', () => {
            if (currentCategory !== category) {
                categoryBtn.classList.add('bg-main-color');
                for (let i = 0; i < categories.children.length; i++) {
                    if (categories.children[i].id === currentCategory) {
                        categories.children[i].classList.remove('bg-main-color');
                        break;
                    }
                }
                currentCategory = category;
                if (category !== '전체') {
                    allTaskBox.forEach((taskBox) => {
                        if (taskList[taskBox.listNum].category === currentCategory) {
                            taskBox.style.display = 'block';
                        } else {
                            taskBox.style.display = 'none';
                        }
                    });
                }
                else {
                    allTaskBox.forEach((taskBox) => {
                        taskBox.style.display = 'block';
                    });
                }
                checkProgress();
            }
        });
        categories.appendChild(categoryBtn);
    }
});