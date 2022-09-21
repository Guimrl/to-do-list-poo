class Todo {

    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText) {
        //clone template
        let template = document.querySelector('.task').cloneNode(true);
        //remove class hide
        template.classList.remove('hide');
        //manipulate text
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector('#tasks-container');

        //insert in the list
        list.appendChild(template);

        //add event to task
        this.addEvents()
    }
    removeTask(task) {
        //find the parent element
        let parentEl = task.parentElement;

        //remove of list
        parentEl.remove();
    }
    completeTask() {

    }
    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length -1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = removeBtns[doneBtns.length - 1];

        //add remove event
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this);
        });

        //add task complete event
        doneBtn.addEventListener('click', function() {
            todo.completeTask(this);
        });
    }
}
let todo = new Todo();

//events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e){
    e.preventDefault();

    let taskText = document.querySelector('#task');
    
    if(taskText.value != '') {
    todo.addTask(taskText.value);
    }

    //clear text field
    taskText.value = '';

});