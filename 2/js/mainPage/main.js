const tasksInProgress = document.querySelector('.tasks-in-progress');
const tasksDone = document.querySelector('.tasks-done');

let currentCategory = '전체';

updateTodayDate();
updateProgressText(currentCategory);

showTasksIn(taskList);

const allTaskBox = document.querySelectorAll('.task-box');

categoryList.forEach((category) => {
    if(category!=='') {
        const categoryBtn = createCategoryButton(category);
        if (category === currentCategory) categoryBtn.classList.add('bg-blue-color');
        if (category.length > 12)
            categoryBtn.innerText = category.slice(0,10) + '⋯';
        categoryBtn.addEventListener('click', () => {
            if (currentCategory !== category) {
                categoryBtn.classList.add('bg-blue-color');
                for (let i = 0; i < categories.children.length; i++) {
                    if (categories.children[i].id === currentCategory) {
                        categories.children[i].classList.remove('bg-blue-color');
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
                updateProgressText(currentCategory);
            }
        });
        categories.appendChild(categoryBtn);
    }
});

function updateTodayDate (){
    const day = new Date();
    document.querySelector('#today').innerHTML = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;
}