const tasksInProgress = document.querySelector('.tasks-in-progress');
const tasksDone = document.querySelector('.tasks-done');

currentCategory = '전체';

updateTodayDate();
updateProgressText(currentCategory);

showTasksIn(filteredTaskListWith(currentCategory, taskList));

categoryList.forEach((category) => {
    if(category!=='') {
        const categoryBtn = createCategoryButton(category);
        if (category === currentCategory) categoryBtn.classList.add('bg-blue-color');
        if (category.length > 12)
            categoryBtn.innerText = category.slice(0,10) + '⋯';
        categoryBtn.addEventListener('click', () => {
            showTasksIn(filteredTaskListWith(currentCategory, taskList));
            updateProgressText(currentCategory);
        });
        categories.appendChild(categoryBtn);
    }
});

function updateTodayDate (){
    const day = new Date();
    document.querySelector('#today').innerHTML = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;
}

function filteredTaskListWith(category, taskList) {
    return category === '전체' ? taskList : taskList.filter((task) => task.category === currentCategory);
}