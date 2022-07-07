const categories = document.querySelector('.categories');
const allTaskBox = document.querySelectorAll('.task-box');

function createCategoryButton(category) {
    const categoryButton = document.createElement('div');
    categoryButton.innerText = category;
    categoryButton.id = category;
    categoryButton.classList.add('category-item', 'blue-round-box', 'padding-8', 'font-size-14');
    if (category === currentCategory) categoryButton.classList.add('selected-category');

    categoryButton.addEventListener('click', () => {
        if (currentCategory !== category) {
            categoryButton.classList.add('selected-category');
            for (let i = 0; i < categories.children.length; i++) {
                if (categories.children[i].id === currentCategory) {
                    categories.children[i].classList.remove('selected-category');
                    break;
                }
            }
            currentCategory = category;
            if (category !== '전체') {
                allTaskBox.forEach((taskBox) => {
                    if (taskList[taskBox.listNum].category === currentCategory) {
                        taskBox.style.display = 'block';
                    } else
                        taskBox.style.display = 'none';
                });
            }
            else {
                allTaskBox.forEach((taskBox) => {
                    taskBox.style.display = 'block';
                });
            }
        }
    });

    return categoryButton;
}

categoryList.forEach((category) => {
    if(category!=='')
        categories.appendChild(createCategoryButton(category));
});