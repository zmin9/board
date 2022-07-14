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

let selectedCategory = '+';

const [titleInputElem, categoryInputElem] = document.querySelectorAll('.task-input');

function createCategoryBtnWithEvent(category){
    const categoryBtn = createCategoryBtn(category);
    categoryBtn.addEventListener('click', () => {
        if (selectedCategory !== category) {
            categoryBtn.classList.add('bg-blue-color');
            for (let i = 0; i < categoryContainer.children.length; i++) {
                if (categoryContainer.children[i].id === selectedCategory) {
                    categoryContainer.children[i].classList.remove('bg-blue-color');
                    break;
                }
            }
            selectedCategory = category;
            categoryInputElem.value = selectedCategory;
            categoryInputElem.disabled = true;
        }
    });
    return categoryBtn
}

categoryDataArr.forEach((category)=>{
    if (category !== '' && category !== '전체') {
        const categoryBtn = createCategoryBtnWithEvent(category);
        categoryContainer.appendChild(categoryBtn);
    }
});

{
    const plusCategoryBtn = createCategoryBtn('+');
    plusCategoryBtn.classList.add('bg-blue-color');

    plusCategoryBtn.addEventListener('click', () => {
        plusCategoryBtn.classList.add('bg-main-color');
        for (let i = 0; i < categoryContainer.children.length - 1; i++) {
            categoryContainer.children[i].classList.remove('bg-main-color');
        }
        selectedCategory = '+';
        categoryInputElem.value = '';
        categoryInputElem.disabled = false;
        categoryInputElem.focus();
    });
    categoryContainer.appendChild(plusCategoryBtn);
}

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

    storeDataInLocalStorage();

    titleInputElem.value = '';
    categoryInputElem.value = '';
    cautionMsg.style.visibility = 'hidden';

    modal.style.opacity = '100';
    setTimeout(() => {
        modal.style.opacity = '0';
    },3000);
});