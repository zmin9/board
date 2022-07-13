function createCategoryButton(category) {
    const categoryButton = document.createElement('div');
    categoryButton.innerText = category;
    categoryButton.id = category;
    categoryButton.classList.add('blue-round-box', 'font-color-blue', 'padding-8-16', 'font-size-14', 'color-transition');
    if(category === currentCategory)
        categoryButton.classList.add('bg-blue-color');

    categoryButton.addEventListener('click', () => {
        if (currentCategory !== category) {
            categoryButton.classList.add('bg-blue-color');

            for (let i = 0; i < categories.children.length; i++) {
                if (categories.children[i].id === currentCategory) {
                    categories.children[i].classList.remove('bg-blue-color');
                    break;
                }
            }
            currentCategory = category;
        }
    });

    return categoryButton;
}
