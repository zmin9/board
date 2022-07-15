import {data} from "../global.js";
import {categoryContainer, createCategoryBtn} from "../categoryButton.js";

let selectedCategory = '+';

const [titleInputElem, categoryInputElem] = document.querySelectorAll('.task-input');

categoryDataArr.forEach((category)=>{
    categoryContainer.appendChild(createCategoryBtnWithEvent( category, true));
});
categoryContainer.appendChild(createCategoryBtnWithEvent('+', false));


const addButtonElem = document.querySelector('button');

addButtonElem.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const cautionMsg = document.querySelector('.caution');

    if(titleInputElem.value.trim() === ''){
        cautionMsg.style.visibility = 'visible';
        titleInputElem.value = '';
        titleInputElem.focus();
        return;
    }

    taskDataArr.push({
        'id': Date.now(),
        'title': titleInputElem.value.trim(),
        'category': categoryInputElem.value.trim(),
        'isDone': false
    });

    if(selectedCategory==='+' && !categoryDataArr.includes(categoryInputElem.value.trim())){
        categoryContainer.lastChild.before(createCategoryBtnWithEvent(categoryInputElem.value.trim()));
    }
    selectedCategory = '+';

    saveTaskDataArr();

    titleInputElem.value = '';
    categoryInputElem.value = '';
    cautionMsg.style.visibility = 'hidden';

    modal.style.opacity = '100';
    setTimeout(() => {
        modal.style.opacity = '0';
    },3000);
});

function createCategoryBtnWithEvent(category, inputFieldDisable){
    const categoryBtn = createCategoryBtn(category);
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
