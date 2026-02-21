const toDoInput = document.querySelector('.todo-inp');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');

toDoBtn.addEventListener('click', addTask);

function addTask() {
    if (toDoInput.value.trim() === '') {
        alert('Write Task');
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = toDoInput.value;

    const del = document.createElement('span');
    del.className = 'delete';
    del.textContent = '×';

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(del);
    toDoList.appendChild(li);

    toDoInput.value = '';
}


toDoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('task-checkbox')) {
        e.target.parentElement.classList.toggle('checked');
    }

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

function filterTasks(filter) {
    const tasks = toDoList.querySelectorAll('li'); 
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'active':
                if (task.classList.contains('checked')) {
                    task.style.display = 'none';
                } else {
                    task.style.display = 'flex';
                }
                break;
            case 'completed':
                if (task.classList.contains('checked')) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
        }
    });
} ;

document.getElementById('all').addEventListener('click', () => filterTasks('all'));
document.getElementById('active').addEventListener('click', () => filterTasks('active'));
document.getElementById('completed').addEventListener('click', () => filterTasks('completed'));