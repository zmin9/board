import data from "../data.js";
import {categoryContainer, createCategoryBtn} from "../category-button.js";


const [titleInputElem, categoryInputElem] = document.querySelectorAll('.task-input');

// 카테고리 설정 변경
setCategoryBtnForAdd();
attachEventListenerToAddingBtn()

function attachEventListenerToAddingBtn(){
    document.querySelector('button').addEventListener('click', () => {
        if(!isTitleFieldEmpty()) {
            data.addTask({
                id: Date.now(),
                title: titleInputElem.value.trim(),
                category: categoryInputElem.value.trim(),
                isDone: false
            });

            setCategoryBtnForAdd();

            titleInputElem.value = '';
            categoryInputElem.value = '';

            showToastMsgForAdding();
        }
    });
    function showToastMsgForAdding(){
        const toastMsg = document.querySelector('.modal');
        toastMsg.style.opacity = '100';
        setTimeout(() => {
            toastMsg.style.opacity = '0';
        },3000);
    }
    function isTitleFieldEmpty(){
        const cautionMsg = document.querySelector('.caution');
        if(titleInputElem.value.trim() === ''){
            showCautionMsg();
            return true;
        }
        else {
            hideCautionMsg();
            return false;
        }

        function showCautionMsg(){
            cautionMsg.style.visibility = 'visible';
            titleInputElem.focus();
        }
        function hideCautionMsg(){
            cautionMsg.style.visibility = 'hidden';
        }
    }
}

function setCategoryBtnForAdd() {
    data.setCurCategory('+');
    categoryInputElem.disabled = false;
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
                categoryInputElem.value = category;
                categoryInputElem.disabled = true;
            });
            categoryContainer.appendChild(categoryBtn);
        });
    }
    function setFreeInputCategoryBtn() {
        const categoryBtn = createCategoryBtn('+');
        categoryBtn.addEventListener('click', () => {
            categoryInputElem.value = '';
            categoryInputElem.disabled = false;
            categoryInputElem.focus();
        });
        categoryContainer.appendChild(categoryBtn);
    }
}
