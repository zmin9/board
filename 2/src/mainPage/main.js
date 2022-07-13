currentCategory = '전체';

updateTodayDate();

updateTaskView(currentCategory);

setCategoryButtons(['전체', ...categoryList], categories);

function updateTodayDate (){
    const day = new Date();
    document.querySelector('#today').innerHTML = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;
}

function setCategoryButtons(categoryList, container) {
    categoryList.forEach((category) => {
        const categoryBtn = createCategoryButton(category);
        if (category.length > 12)
            shortenCategoryTo(12, categoryBtn);
        categoryBtn.addEventListener('click', () => updateTaskView(currentCategory));
        container.appendChild(categoryBtn);
    });
}

function updateTaskView(currentCategory) {
    updateProgressText(filteredTaskListWith(currentCategory, taskList));
    showTasksIn(filteredTaskListWith(currentCategory, taskList));
}

function filteredTaskListWith(category, taskList) {
    return category === '전체' ? taskList : taskList.filter((task) => task.category === category);
}