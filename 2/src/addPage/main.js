import data from "../data.js";
import {categoryContainer, createCategoryBtn} from "../category-button.js";


const [titleInputElem, categoryInputElem] = document.querySelectorAll('.task-input');

// 카테고리 설정 변경
setCategoryBtnForAdd();

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
});


function setCategoryBtnForAdd() {
    data.setCurCategory('+');
    categoryInputElem.disabled = false;
    resetChildren(categoryContainer);
    data.categoryArr().forEach((category) => {
        categoryContainer.appendChild(createCategoryBtnWithEvent(category,true));
    });
    categoryContainer.appendChild(createCategoryBtnWithEvent('+',false));

    function resetChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }
    function createCategoryBtnWithEvent(category,inputFieldDisable){
        const categoryBtn = createCategoryBtn(category, categoryContainer);
        categoryBtn.addEventListener('click', () => {
            data.setCurCategory(category);
            if (inputFieldDisable) {
                categoryInputElem.value = category;
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
}
