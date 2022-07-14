function createContextMenuModal(task){
    const taskTitle = createDivElement(['modal-title'], [task.title]);

    const modifyBtn = createBtnForModal('수정', 'blue');
    modifyBtn.addEventListener('click', () => {
        document.body.lastChild.lastChild.remove(); // 현재 모달창 삭제
        document.body.lastChild.appendChild(createModifyingModal(task)); // 새로운 모달창 추가
    });

    const deleteBtn = createBtnForModal('삭제', 'red');
    deleteBtn.addEventListener('click',()=>{
        taskDataArr.splice(taskDataArr.indexOf(task), 1);

        saveTaskDataArr();
        location.reload();
    });

    const modal = createWhiteModalBox(taskTitle, modifyBtn, deleteBtn);

    const background = createDivElement(['modal-background']);
    background.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.lastChild.remove();
    });

    return createDivElement(null, [background, modal]);

    function createInputForModal(value, placeholder, ...additionalClass){
        const inputForModal = document.createElement('input');
        inputForModal.value = value;
        inputForModal.placeholder = placeholder
        inputForModal.classList.add('padding-8-16', 'font-size-15', 'task-input', 'bg-color', ...additionalClass);
        return inputForModal;
    }

    function createWhiteModalBox(...appendedChildren){
        const modal = document.createElement('div');
        modal.classList.add('modal', 'modal-position-center', 'flex-box-col' ,'flex-alignment-center');
        modal.append(...appendedChildren);
        return modal;
    }

    function createBtnForModal(text, color){
        const btn = document.createElement('button');
        btn.classList.add('large-button', 'button-modal', `bg-${color}-color`, 'margin-top-8');
        btn.append(text);
        return btn;
    }

    function createModifyingModal(task){
        const inputForTitle = createInputForModal(task.title, '타이틀');
        const inputForCategory = createInputForModal(task.category, '카테고리', 'margin-top-8');
        const submitBtn = createBtnForModal('확인', 'blue');
        submitBtn.addEventListener('click', () => {
            task.title = inputForTitle.value;
            task.category = inputForCategory.value;
            saveTaskDataArr();
            location.reload();
        });
        return createWhiteModalBox(inputForTitle, inputForCategory, submitBtn);
    }
}


function createDivElement(className, appendedChildren){
    const divElem = document.createElement('div');
    className&& divElem.classList.add(...className);
    appendedChildren && divElem.append(...appendedChildren);

    return divElem;
}