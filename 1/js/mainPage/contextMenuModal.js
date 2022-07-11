function createContextMenuModal(task, taskBox){
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('modal-title');
    taskTitle.innerText = task.title;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('large-button', 'button-modal', 'bg-oppo-color', 'margin-top-8');
    deleteBtn.innerText = '삭제';

    deleteBtn.addEventListener('click',()=>{
        taskList.splice(taskList.indexOf(task), 1);

        localStorage.setItem('tasks', JSON.stringify(taskList));
        document.body.lastChild.remove();
        taskBox.parentNode.removeChild(taskBox);
        location.reload();
    });

    const modal = document.createElement('div');
    modal.classList.add('modal', 'modal-position-center', 'flex-box-col' ,'flex-alignment-center');

    modal.append(taskTitle, modifyBtn, deleteBtn);

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