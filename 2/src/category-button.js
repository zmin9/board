import data from "./data.js";

const categoryContainer = document.querySelector('#categories');

function createCategoryBtn(category) {
    const categoryBtn = document.createElement('div');
    categoryBtn.innerText = category.length > 12 ? getShortCategoryStr(12, category) : category;
    categoryBtn.id = category;
    categoryBtn.classList.add('blue-round-box', 'font-color-blue', 'padding-8-16', 'font-size-14', 'color-transition');
    if(category === data.curCategory())
        categoryBtn.classList.add('bg-blue-color');
    categoryBtn.addEventListener('click', () => {
        if (data.curCategory() !== category) {
            categoryBtn.classList.add('bg-blue-color');

            for (let i = 0; i < categoryContainer.children.length; i++) {
                if (categoryContainer.children[i].id === data.curCategory()) {
                    categoryContainer.children[i].classList.remove('bg-blue-color');
                    break;
                }
            }
            data.setCurCategory(category);
        }
    });
    return categoryBtn;


    function getShortCategoryStr(limit, category){
        return category.slice(0,limit - 3) + '⋯';
    }
}

export {categoryContainer, createCategoryBtn};