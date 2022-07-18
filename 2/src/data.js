const data = (function(){
    const taskDataArr = JSON.parse(localStorage.getItem('tasks')) || [];
    let category = '';

    function categoryArr() {
        return taskDataArr.map((task) => task.category)
                            .reduce((result, category) => {
                                if (result.includes(category) || category === '') return result;
                                else return [...result, category];
                            }, []);
    }
    function filteredTaskArr() {
        return curCategory() === '전체' ? taskDataArr : taskDataArr.filter((task) => task.category === curCategory());
    }
    function task(taskId){ return taskDataArr[findIndexOf(taskId)]; }
    function curCategory() { return category; }
    function setCurCategory(curCategory) { category = curCategory; }

    function addTask(task){
        taskDataArr.push({
            'id': task.id * 1,
            'title': task.title,
            'category': task.category,
            'isDone': task.isDone
        });
        save();
    }
    function deleteTask(taskId){
        taskDataArr.splice(findIndexOf(taskId), 1);
        save();
    }
    function modifyTask(taskId, title, category) {
        const pre = taskDataArr[findIndexOf(taskId)];
        taskDataArr[findIndexOf(taskId)] = {
            id: taskId * 1,
            title: title || pre.title,
            category: category || pre.category,
            isDone: pre.isDone
        }
        save();
    }
    function changeCheckedState(taskId){
        const pre = taskDataArr[findIndexOf(taskId)];
        taskDataArr[findIndexOf(taskId)] = {
            ...pre,
            isDone: !pre.isDone
        };
        save();
    }

    function save(){
        localStorage.setItem('tasks', JSON.stringify(taskDataArr));
    }
    function findIndexOf(taskId){
        for(let i = 0; i < taskDataArr.length; i++)
            if(taskDataArr[i].id === taskId * 1) {
                return i;
            }
        throw new Error('잘못된 task id 입니다.');
    }

    return {
        curCategory,
        setCurCategory,
        filteredTaskArr,
        categoryArr,
        task,
        addTask,
        deleteTask,
        modifyTask,
        changeCheckedState
    };
})();

export default data;