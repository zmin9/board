import data from "../data.js";
import {categoryContainer, createCategoryBtn} from "../categoryButton.js";
import setProgressText from "./setProgressText.js";
import showTaskBoxElem from "./manageTaskBox.js";

data.setCurCategory('전체');

setTodayDate();
setCategoryBtnForMain(['전체', ...data.categoryArr()]);
setTaskView(data.filteredTaskArr());

function setTodayDate () {
    const day = new Date();
    document.querySelector('#today').append(`${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`);
}

function setCategoryBtnForMain(categoryArr) {
    categoryArr.forEach((category) => {
        const categoryBtn = createCategoryBtn(category);
        categoryBtn.addEventListener('click', () => {
            setTaskView(data.filteredTaskArr());
        });
        categoryContainer.appendChild(categoryBtn);
    });
}

// task관련 화면 업데이트
function setTaskView(filteredTaskList) {
    setProgressText(filteredTaskList);
    showTaskBoxElem(filteredTaskList);
}