import data from "../data.js";
import {categoryContainer, createCategoryBtn} from "../category-button.js";
import showTaskBoxElem from "./task-box-element.js";

data.setCurCategory('전체');

setTodayDate();
setCategoryBtnForMain();
showTaskBoxElem();

function setTodayDate () {
    const day = new Date();
    document.querySelector('#today').append(`${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`);
}

function setCategoryBtnForMain() {
    ['전체', ...data.categoryArr()].forEach((category) => {
        const categoryBtn = createCategoryBtn(category);
        categoryBtn.addEventListener('click', () => {
            showTaskBoxElem();
        });
        categoryContainer.appendChild(categoryBtn);
    });
}