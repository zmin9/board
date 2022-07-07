function createContextMenuModal(task, taskBox){
    const taskTitle = document.createElement('div');
    taskTitle.className = 'modal-title';
    taskTitle.innerText = task.title;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'large-button';
    deleteBtn.innerText = '삭제';

    const modal = document.createElement('div');
    modal.classList.add('modal', 'modal-position-center', 'flex-alignment-center');
    modal.append(taskTitle, deleteBtn);

    modal.children[1].addEventListener('click',()=>{
        taskList.splice(taskList.indexOf(task), 1);

        localStorage.setItem('tasks', JSON.stringify(taskList));
        document.body.lastChild.remove();
        taskBox.parentNode.removeChild(taskBox);
        location.reload();
    });

    const background = document.createElement('div');
    background.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.lastChild.remove();
    });
    background.className = 'modal-background';

    const modalWithBackground = document.createElement('div');
    modalWithBackground.append(background, modal);

    return modalWithBackground;
}