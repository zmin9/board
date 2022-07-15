export const data = (function(){
    const taskDataArr = JSON.parse(localStorage.getItem('tasks')) || [];

    function getTaskArr() { return taskDataArr; }
    function getCategoryArr() {
        return taskDataArr.map((task) => task.category)
                            .reduce((result, category) => {
                                if (result.includes(category) || category === '') return result;
                                else return [...result, category];
                            }, []);
    }
    function addTask(id, title, category, isDone){
        taskDataArr.push({
            'id': id,
            'title': title,
            'category': category,
            'isDone': isDone
        });
        save();
    }
    function deleteTask(taskId){
        taskDataArr.remove(taskDataArr[findIndexOf(taskId)]);
        save();
    }
    function modifyTask(taskId, task) {
        taskDataArr[findIndexOf(taskId)] = {
            id: taskId,
            title: task.title,
            category: task.category,
            isDone: task.isDone
        }
        save();
    }

    function save(){
        localStorage.setItem('tasks', JSON.stringify(taskDataArr));
    }
    function findIndexOf(taskId){
        for(let i = 0; i < taskDataArr.length; i++)
            if(taskDataArr[i].id === taskId) {
                taskDataArr.remove(taskDataArr[i]);
                return i;
            }
        throw new Error('잘못된 task id 입니다.');
    }

    return {
        getTaskArr,
        getCategoryArr,
        addTask,
        deleteTask,
        modifyTask
    };
})();
