const [taskTitle, taskCategory] = document.querySelectorAll('.task-input > input');

let selectedCategory = '+';

function categoryBtnWithEvent(category){
    const categoryBtn = createCategoryButton(category);
    categoryBtn.addEventListener('click', () => {
        if (selectedCategory !== category) {
            categoryBtn.classList.add('selected-category');
            for (let i = 0; i < categories.children.length; i++) {
                if (categories.children[i].id === selectedCategory) {
                    categories.children[i].classList.remove('selected-category');
                    break;
                }
            }
            selectedCategory = category;
            taskCategory.value = selectedCategory;
            taskCategory.disabled = true;
        }
    });
    return categoryBtn
}

categoryList.forEach((category)=>{
    if (category !== '' && category !== '전체') {
        const categoryBtn = categoryBtnWithEvent(category);
        categories.appendChild(categoryBtn);
    }
});

{
    const plusCategoryBtn = createCategoryButton('+');
    plusCategoryBtn.classList.add('selected-category');

    plusCategoryBtn.addEventListener('click', () => {
        plusCategoryBtn.classList.add('selected-category');
        for (let i = 0; i < categories.children.length - 1; i++) {
            categories.children[i].classList.remove('selected-category');
        }
        selectedCategory = '+';
        taskCategory.value = '';
        taskCategory.disabled = false;
        taskCategory.focus();
    });
    categories.appendChild(plusCategoryBtn);
}

const addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const cautionMsg = document.querySelector('.caution');

    if(taskTitle.value.trim() === ''){
        cautionMsg.style.visibility = 'visible';
        taskTitle.value = '';
        taskTitle.focus();
        return;
    }

    taskList.push({
        'id': taskList.length,
        'title': taskTitle.value.trim(),
        'category': taskCategory.value.trim(),
        'isDone': false
    });

    if(selectedCategory==='+'){
        categories.lastChild.before(categoryBtnWithEvent(taskCategory.value.trim()));
    }

    localStorage.setItem('tasks', JSON.stringify(taskList));

    taskTitle.value = '';
    taskCategory.value = '';
    cautionMsg.style.visibility = 'hidden';

    modal.style.opacity = '100';
    setTimeout(() => {
        modal.style.opacity = '0';
    },3000);
});