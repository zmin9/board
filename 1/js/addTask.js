const addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
    const [taskTitle, taskCategory] = document.querySelectorAll('.task-input > input');
    const modal = document.querySelector('.modal');
    const cautionMsg = document.querySelector('.task-input > div');

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
    localStorage.setItem('tasks', JSON.stringify(taskList));

    taskTitle.value = '';
    taskCategory.value = '';
    cautionMsg.style.visibility = 'hidden';

    modal.style.opacity = '100';
    setTimeout(() => {
        modal.style.opacity = '0';
    },3000);
});