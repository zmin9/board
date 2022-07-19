function createDivElement(className, appendedChildren){
    const divElement = document.createElement('div');
    className&& divElement.classList.add(...className);
    appendedChildren && divElement.append(...appendedChildren);

    return divElement;
}

function createInputForModal(value, placeholder){
    const inputForModal = document.createElement('input');
    inputForModal.value = value;
    inputForModal.placeholder = placeholder
    inputForModal.classList.add('padding-8-16', 'font-size-15', 'task-input', 'bg-color');
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
    btn.classList.add('large-button', 'button-modal', `bg-${color}-color`, 'marginT-1');
    btn.append(text);
    return btn;
}

function createTaskBoxElement(task) {
    const taskCheckbox = createDivElement(['task-check']);

    const taskTitle = createDivElement(['task-title', 'font-weight-500', 'line-height-24', 'font-color-main'], [task.title]);
    const taskCategory = createDivElement(['task-category', 'font-weight-600', 'marginT-1', 'font-color-sub'], [task.category]);
    const taskInformation = createDivElement(['task-info'], [taskTitle, taskCategory]);

    const labelForCheckbox = document.createElement('label');
    labelForCheckbox.classList.add('flex-box-row');
    labelForCheckbox.htmlFor = 'task' + task.id;
    labelForCheckbox.append(taskCheckbox, taskInformation);

    const checkboxTypeInput = document.createElement('input');
    checkboxTypeInput.type = 'checkbox';
    checkboxTypeInput.id = 'task' + task.id;
    checkboxTypeInput.checked = task.isDone;

    const taskBoxElement = createDivElement(['task-box', 'marginT-2', 'flex-box-row'], [checkboxTypeInput, labelForCheckbox]);
    taskBoxElement.taskId = task.id;

    return taskBoxElement;
}

function createEmptyMsgElement() {
    return createDivElement(
        ['font-color-sub', 'font-size-15', 'flex-box-row', 'flex-alignment-center', 'marginT-3'],
        ['항목이 없습니다']
    );
}


export {createDivElement, createWhiteModalBox, createInputForModal, createBtnForModal, createTaskBoxElement, createEmptyMsgElement};