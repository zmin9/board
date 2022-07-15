import {data} from "../global.js";
import {categoryContainer, createCategoryBtn} from "../categoryButton.js";

let selectedCategory = '+';

const [titleInputElem, categoryInputElem] = document.querySelectorAll('.task-input');

// 카테고리 설정 변경
setCategoryBtn();

document.querySelector('button').addEventListener('click', () => {
    if(!isTitleFieldEmpty()) {
        data.addTask(
            Date.now(), titleInputElem.value.trim(), categoryInputElem.value.trim(), false
        );

        setCategoryBtn();

        titleInputElem.value = '';
        categoryInputElem.value = '';

        showSuccessToastMsg();
    }

    function showSuccessToastMsg(){
        const successToastMsg = document.querySelector('.modal');
        successToastMsg.style.opacity = '100';
        setTimeout(() => {
            successToastMsg.style.opacity = '0';
        },3000);
    }
});


function createCategoryBtnWithEvent(category, inputFieldDisable){
    const categoryBtn = createCategoryBtn(category, selectedCategory, categoryContainer);
    categoryBtn.addEventListener('click', () => {
        selectedCategory = category;
        if (inputFieldDisable) {
            categoryInputElem.value = selectedCategory;
            categoryInputElem.disabled = true;
        }
        else {
            categoryInputElem.value = '';
            categoryInputElem.disabled = false;
            categoryInputElem.focus();
        }
    });
    return categoryBtn
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
        titleInputElem.value = '';
        titleInputElem.focus();
    }
    function hideCautionMsg(){
        cautionMsg.style.visibility = 'hidden';
    }
}

function setCategoryBtn() {
    selectedCategory = '+';
    categoryInputElem.disabled = false;
    resetChildren(categoryContainer);
    data.getCategoryArr().forEach((category) => {
        categoryContainer.appendChild(createCategoryBtnWithEvent(category, true));
    });
    categoryContainer.appendChild(createCategoryBtnWithEvent('+', false));

    function resetChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }
}
