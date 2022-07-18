function createDivElement(className, appendedChildren){
    const divElem = document.createElement('div');
    className&& divElem.classList.add(...className);
    appendedChildren && divElem.append(...appendedChildren);

    return divElem;
}

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

function createTaskBoxElement(task) {
    const taskCheckbox = createDivElement(['task-check']);

    const taskTitle = createDivElement(['task-title', 'font-weight-500', 'line-height-24', 'font-color-main'], [task.title]);
    const taskCategory = createDivElement(['task-category', 'font-weight-600', 'margin-top-8', 'font-color-sub'], [task.category]);
    const taskInformation = createDivElement(['task-info'], [taskTitle, taskCategory]);

    const labelForCheckbox = document.createElement('label');
    labelForCheckbox.classList.add('flex-box-row');
    labelForCheckbox.htmlFor = 'task' + task.id;
    labelForCheckbox.append(taskCheckbox, taskInformation);

    const checkboxTypeInput = document.createElement('input');
    checkboxTypeInput.type = 'checkbox';
    checkboxTypeInput.id = 'task' + task.id;
    checkboxTypeInput.checked = task.isDone;

    const taskBoxElem = createDivElement(['task-box', 'margin-top-16', 'flex-box-row'], [checkboxTypeInput, labelForCheckbox]);
    taskBoxElem.taskId = task.id;

    return taskBoxElem;
}

function createEmptyMsgElement() {
    return createDivElement(
        ['font-color-sub', 'font-size-15', 'flex-box-row', 'flex-alignment-center', 'margin-top-24'],
        [document.createTextNode('항목이 없습니다')]
    );
}


export {createDivElement, createWhiteModalBox, createInputForModal, createBtnForModal, createTaskBoxElement, createEmptyMsgElement};