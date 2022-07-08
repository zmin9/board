function createCategoryButton(category) {
    const categoryButton = document.createElement('div');
    categoryButton.innerText = category;
    categoryButton.id = category;
    categoryButton.classList.add('blue-round-box', 'padding-8', 'font-size-14', 'color-transition');
    if (category === currentCategory) categoryButton.classList.add('selected-category');

    return categoryButton;
}
