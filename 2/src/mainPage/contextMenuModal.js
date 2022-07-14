function createContextMenuModal(task, taskBox){
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('modal-title');
    taskTitle.innerText = task.title;

    const modifyBtn = document.createElement('button');
    modifyBtn.classList.add('large-button', 'button-modal', 'bg-blue-color');
    modifyBtn.innerText = '수정';

    modifyBtn.addEventListener('click', () => {
        document.body.lastChild.lastChild.remove(); // 현재 모달창 삭제

        const inputForTitle = document.createElement('input');
        inputForTitle.value = task.title;
        inputForTitle.placeholder = '타이틀'
        inputForTitle.classList.add('padding-8-16', 'font-size-15', 'task-input', 'bg-color');
        const inputForCategory = document.createElement('input');
        inputForCategory.value = task.category;
        inputForCategory.placeholder = '카테고리'
        inputForCategory.classList.add('padding-8-16', 'font-size-15', 'task-input', 'bg-color', 'margin-top-8');
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('large-button', 'button-modal', 'bg-blue-color', 'margin-top-16');
        submitBtn.innerText = '확인';
        submitBtn.addEventListener('click', () => {
            task.title = inputForTitle.value;
            task.category = inputForCategory.value;
            saveTaskDataArr();
            location.reload();
        });

        const modifyModal = document.createElement('div');
        modifyModal.classList.add('modal', 'modal-position-center', 'flex-box-col' ,'flex-alignment-center');
        modifyModal.append(inputForTitle, inputForCategory, submitBtn);

        document.body.lastChild.appendChild(modifyModal);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('large-button', 'button-modal', 'bg-red-color', 'margin-top-8');
    deleteBtn.innerText = '삭제';

    deleteBtn.addEventListener('click',()=>{
        taskDataArr.splice(taskDataArr.indexOf(task), 1);

        saveTaskDataArr();
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