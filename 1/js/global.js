const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const categoryList = new Set(['전체', ...taskList.map((task) => task.category)]);

let currentCategory = '전체';