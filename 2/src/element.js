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



export {createDivElement, createWhiteModalBox, createInputForModal, createBtnForModal};