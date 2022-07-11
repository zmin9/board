function createCategoryButton(category) {
    const categoryButton = document.createElement('div');
    categoryButton.innerText = category;
    categoryButton.id = category;
    categoryButton.classList.add('blue-round-box', 'font-color-blue', 'padding-8', 'font-size-14', 'color-transition');

    return categoryButton;
}
