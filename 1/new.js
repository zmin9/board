const newInput = document.querySelectorAll('.task-input > input');
const addButton = document.querySelector('button');
const modal = document.querySelector('.modal');

const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

addButton.addEventListener('click', () => {
    const taskTitle = newInput[0].value;
    const taskCategory = newInput[1].value;

    taskList.push({
        'id': taskList.length,
        'title': taskTitle,
        'category': taskCategory,
        'isDone': false
    });

    localStorage.setItem('tasks', JSON.stringify(taskList));
    newInput[0].value = '';
    newInput[1].value = '';

    modal.innerHTML = '태스크가 추가되었습니다.';
    modal.style.opacity = '100';
    setTimeout(()=>{
        modal.style.opacity = '0';
    },3000);
});