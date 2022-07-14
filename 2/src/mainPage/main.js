const taskDataArr = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const categoryDataArr = taskDataArr.map((task) => task.category)
    .reduce((result, category) => {
        if (result.includes(category) || category === '') return result;
        else return [...result, category]
    }, []);
const categoryContainer = document.querySelector('#categories');

function storeDataInLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(taskDataArr));
}

let selectedCategory = '전체';


setTodayDate();
setCategoryBtn(['전체', ...categoryDataArr], categoryContainer);
updateTaskView(selectedCategory);

function setTodayDate (){
    const day = new Date();
    document.querySelector('#today').innerHTML = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;
}

function setCategoryBtn(categoryArr, container) {
    categoryArr.forEach((category) => {
        const categoryBtn = createCategoryBtn(category);
        categoryBtn.addEventListener('click', () => updateTaskView(selectedCategory));
        container.appendChild(categoryBtn);
    });
}

// task관련 화면 업데이트
function updateTaskView(selectedCategory) {
    updateProgressText(getFilteredTaskArr(selectedCategory, taskDataArr));
    showTaskBoxElem(getFilteredTaskArr(selectedCategory, taskDataArr));
}

function getFilteredTaskArr(category, taskList) {
    return category === '전체' ? taskList : taskList.filter((task) => task.category === category);
}