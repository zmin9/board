const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const categoryList = new Set(['전체', ...taskList.map((task) => task.category)]);
const categories = document.querySelector('#categories');
