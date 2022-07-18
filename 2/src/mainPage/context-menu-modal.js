import { createDivElement, createBtnForModal, createWhiteModalBox, createInputForModal } from "../element.js";
import data from "../data.js";

function createContextMenuModal(taskId){
    const task = data.task(taskId);
    const taskTitle = createDivElement(['modal-title'], [task.title]);

    const modifyBtn = createBtnForModal('수정', 'blue');
    modifyBtn.addEventListener('click', () => {
        document.body.lastChild.lastChild.remove(); // 현재 모달창 삭제
        document.body.lastChild.appendChild(createModifyingModal(task)); // 새로운 모달창 추가
    });

    const deleteBtn = createBtnForModal('삭제', 'red');
    deleteBtn.addEventListener('click',()=>{
        data.deleteTask(task.id);
        location.reload();
    });

    const modal = createWhiteModalBox(taskTitle, modifyBtn, deleteBtn);

    const background = createDivElement(['modal-background']);
    background.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.lastChild.remove();
    });

    return createDivElement(null, [background, modal]);


    function createModifyingModal(task){
        const inputForTitle = createInputForModal(task.title, '타이틀');
        const inputForCategory = createInputForModal(task.category, '카테고리', 'margin-top-8');
        const submitBtn = createBtnForModal('확인', 'blue');
        submitBtn.addEventListener('click', () => {
            data.modifyTask(task.id, inputForTitle.value, inputForCategory.value);
            location.reload();
        });
        return createWhiteModalBox(inputForTitle, inputForCategory, submitBtn);
    }
}

export default createContextMenuModal;