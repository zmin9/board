import data from "../data.js";
import {categoryContainer, createCategoryBtn} from "../category-button.js";

const [titleInputElement, categoryInputElement] = document.querySelectorAll('.task-input');
let timer = null;

// 카테고리 설정 변경
setCategoryBtnForAdd();
attachEventListenerToAddingBtn()

function attachEventListenerToAddingBtn(){
    document.querySelector('button').addEventListener('click', () => {
        if(!isTitleFieldEmpty()) {
            EmptyCautionMsg.hide();
            data.addTask({
                id: Date.now(),
                title: titleInputElement.value.trim(),
                category: categoryInputElement.value.trim(),
                isDone: false
            });

            setCategoryBtnForAdd();

            titleInputElement.value = '';
            categoryInputElement.value = '';

            showToastMsgForAdding();
            return;
        }
        EmptyCautionMsg.show();
    });

    function isTitleFieldEmpty(){ return titleInputElement.value.trim() === ''; }

    function showToastMsgForAdding(){
        if (timer) {
            clearTimeout(timer);
        }
        document.querySelector('#toast-msg').style.opacity = '100';
        timer = setTimeout(() => {
            document.querySelector('#toast-msg').style.opacity = '0';
            timer = null;
        }, 2000);
    }
}

function setCategoryBtnForAdd() {
    data.setCurCategory('+');
    categoryInputElement.disabled = false;
    resetChildren(categoryContainer);
    setFixedPreviousCategoryBtns();
    setFreeInputCategoryBtn();
    

    function resetChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }
    function setFixedPreviousCategoryBtns() {
        data.categoryArr().forEach((category) => {
            const categoryBtn = createCategoryBtn(category);
            categoryBtn.addEventListener('click', () => {
                categoryInputElement.value = category;
                categoryInputElement.disabled = true;
            });
            categoryContainer.appendChild(categoryBtn);
        });
    }
    function setFreeInputCategoryBtn() {
        const categoryBtn = createCategoryBtn('+');
        categoryBtn.addEventListener('click', () => {
            categoryInputElement.value = '';
            categoryInputElement.disabled = false;
            categoryInputElement.focus();
        });
        categoryContainer.appendChild(categoryBtn);
    }
}

class EmptyCautionMsg {
    static show(){
        document.querySelector('.caution').style.visibility = 'visible';
        titleInputElement.focus();
    }
    static hide(){
        document.querySelector('.caution').style.visibility = 'hidden';
    }
}
