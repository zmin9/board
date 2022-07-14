const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const categoryList = taskList.map((task) => task.category)
    .reduce((result, category) => {
        if (result.includes(category) || category === '') return result;
        else return [...result, category]
    }, []);
const categories = document.querySelector('#categories');

function storeDataInLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

let currentCategory = '전체';

// 날짜를 오늘 날짜로 변경
updateTodayDate();

// 테스크 화면 업데이트
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